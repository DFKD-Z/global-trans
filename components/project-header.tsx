"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Search,
  User,
  FolderCode,
  GitBranch,
  KeyRound,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { useAuth } from "@/app/provider/AuthProvider"
import React from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { apiFetch } from "@/lib/apiClient"

/** 全局搜索结果（与 API 返回的 data 结构一致） */
interface GlobalSearchResult {
  projects: Array<{ id: string; name: string }>
  versions: Array<{ id: string; name: string; projectId: string; projectName: string }>
  keys: Array<{
    id: string
    name: string
    versionId: string
    projectId: string
    versionName: string
    projectName: string
  }>
}

const NAV_LINKS = [
  // { label: "文档", href: "/docs" },
  // { label: "组件", href: "/components" },
  // { label: "Blocks", href: "/blocks" },
  // { label: "图表", href: "/charts" },
  // { label: "目录", href: "/directory" },
  // { label: "Create", href: "/create" },
  // { label: "Dashboard", href: "/dashboard" },
] as const

const DEBOUNCE_MS = 200

/** 去掉 project/version/key-{id}- 前缀，只保留实际关键字（如 "project-xxx-dd" → "dd"） */
function getSearchKeywordOnly(raw: string): string {
  const trimmed = raw.trim()
  if (!trimmed) return trimmed
  const m = trimmed.match(/^(project|version|key)-[a-z0-9]{20,30}-(.+)$/i)
  return m ? m[2].trim() : trimmed
}

const SearchCommand = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [queryKeyword, setQueryKeyword] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<GlobalSearchResult>({
    projects: [],
    versions: [],
    keys: [],
  })

  const fetchSearch = React.useCallback(async (q: string) => {
    setLoading(true)
    try {
      const keyword = getSearchKeywordOnly(q)
      const url = keyword ? `/api/search?q=${encodeURIComponent(keyword)}` : "/api/search"
      const res = await apiFetch(url)
      const json = await res.json()
      if (json.code === 200 && json.data) {
        setResult(json.data as GlobalSearchResult)
      } else {
        setResult({ projects: [], versions: [], keys: [] })
      }
    } catch {
      setResult({ projects: [], versions: [], keys: [] })
    } finally {
      setLoading(false)
    }
  }, [])

  // 弹窗打开时清空关键词，由防抖 effect 触发一次「全部」搜索
  React.useEffect(() => {
    if (open) setQueryKeyword("")
  }, [open])

  // 关键词防抖搜索（空关键词时返回全部）
  React.useEffect(() => {
    if (!open) return
    if (!queryKeyword) return
    const t = window.setTimeout(() => fetchSearch(queryKeyword), DEBOUNCE_MS)
    return () => clearTimeout(t)
  }, [open, queryKeyword, fetchSearch])

  const hasAny =
    result.projects.length > 0 || result.versions.length > 0 || result.keys.length > 0

  const handleSelect = React.useCallback(
    (href: string) => {
      setOpen(false)
      router.push(href)
    },
    [router]
  )

  return (
    <div className="flex flex-col gap-4">
      <div onClick={() => setOpen(true)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setOpen(true)}>
        {children}
      </div>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="全局搜索"
        description="搜索项目、版本或翻译键并跳转"
      >
        <Command
          shouldFilter={false}
        >
          <CommandInput placeholder="搜索项目、版本、翻译键..." value={queryKeyword}
            onValueChange={setQueryKeyword} />
          <CommandList>
            {loading && (
              <div className="py-6 text-center text-sm text-[#71717a]">
                搜索中...
              </div>
            )}
            {!loading && !hasAny && (
              <CommandEmpty>未找到匹配结果</CommandEmpty>
            )}
            {!loading && hasAny && (
              <>
                {result.projects.length > 0 && (
                  <CommandGroup heading="项目">
                    {result.projects.map((p) => (
                      <CommandItem
                        key={`project-${p.id}`}
                        value={`project-${p.id}-${p.name}`}
                        onSelect={() => handleSelect(`/project/${p.id}`)}
                      >
                        <FolderCode className="size-4" />
                        <span>{p.name}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
                {result.versions.length > 0 && (
                  <CommandGroup heading="版本">
                    {result.versions.map((v) => (
                      <CommandItem
                        key={`version-${v.id}`}
                        value={`version-${v.id}-${v.name}`}
                        onSelect={() =>
                          handleSelect(`/project/${v.projectId}/keys?versionId=${v.id}`)
                        }
                      >
                        <GitBranch className="size-4" />
                        <span>{v.name}</span>
                        <span className="ml-1 text-xs text-[#71717a]">
                          — {v.projectName}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
                {result.keys.length > 0 && (
                  <CommandGroup heading="翻译键">
                    {result.keys.map((k) => (
                      <CommandItem
                        key={`key-${k.id}`}
                        value={`key-${k.id}-${k.name}`}
                        onSelect={() =>
                          handleSelect(
                            `/project/${k.projectId}/keys?versionId=${k.versionId}`
                          )
                        }
                      >
                        <KeyRound className="size-4" />
                        <span>{k.name}</span>
                        <span className="ml-1 text-xs text-[#71717a]">
                          — {k.versionName} · {k.projectName}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export function ProjectHeader() {

  const { logout } = useAuth();
  return (
    <header
      className={cn(
        "flex h-14 w-full shrink-0 items-center justify-between gap-4 border-b border-white/10",
        "bg-black px-6 text-[#a1a1aa]"
      )}
    >
      {/* Left: Logo + Nav */}
      <div className="flex min-w-0 flex-1 items-center gap-8">
        {/* Brand: double slash */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-[#a1a1aa] transition-colors hover:text-white"
          aria-label="Home"
        >
          <span className="flex -skew-x-12 font-mono text-lg font-medium tracking-tight text-[#d4d4d8]">
            {"//"}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "shrink-0 text-sm font-medium transition-colors",
                "text-[#a1a1aa] hover:text-white"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right: Search + Stats + CTA */}
      <div className="flex shrink-0 items-center gap-3">
        {/* Search */}
        <SearchCommand>
          <div className="relative hidden w-56 lg:block">
            <Search
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#71717a]"
              aria-hidden
            />
            <Input
              type="search"
              placeholder="搜索项目、版本、翻译键..."
              disabled
              className={cn(
                "h-8 rounded-md border-white/10 bg-white/5 pl-9 text-sm",
                "placeholder:text-[#71717a] focus-visible:ring-white/20"
              )}
              aria-label="搜索项目、版本、翻译键"
            />
          </div>
        </SearchCommand>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage className="size-6" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuItem>
              <div onClick={logout} className="flex items-center gap-2">
                <User className="size-4" />
                退出登录
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
