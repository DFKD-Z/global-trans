"use client"

import Link from "next/link"
import {
  Search,
  Github,
  LayoutGrid,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "文档", href: "/docs" },
  { label: "组件", href: "/components" },
  { label: "Blocks", href: "/blocks" },
  { label: "图表", href: "/charts" },
  { label: "目录", href: "/directory" },
  { label: "Create", href: "/create" },
  { label: "Dashboard", href: "/dashboard" },
] as const

export function ProjectHeader() {
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
        <div className="relative hidden w-56 lg:block">
          <Search
            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#71717a]"
            aria-hidden
          />
          <Input
            type="search"
            placeholder="搜索文档..."
            className={cn(
              "h-8 rounded-md border-white/10 bg-white/5 pl-9 text-sm",
              "placeholder:text-[#71717a] focus-visible:ring-white/20"
            )}
            aria-label="搜索文档"
          />
        </div>

        {/* Pill: 98K */}
        <span
          className={cn(
            "hidden shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-[#a1a1aa] lg:inline-block"
          )}
        >
          98K
        </span>

        {/* GitHub */}
        <a
          href="https://github.com/shadcn-ui/ui"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1.5 text-sm transition-colors",
            "text-[#a1a1aa] hover:bg-white/5 hover:text-white"
          )}
          aria-label="GitHub 105k stars"
        >
          <Github className="size-4 shrink-0" />
          <span>105k</span>
        </a>

        {/* Components / Directory icon + 101 */}
        <a
          href="/components"
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1.5 text-sm transition-colors",
            "text-[#a1a1aa] hover:bg-white/5 hover:text-white"
          )}
          aria-label="组件 101"
        >
          <LayoutGrid className="size-4 shrink-0" />
          <span>101</span>
        </a>

        {/* New Project */}
        <Button
          asChild
          className={cn(
            "h-8 shrink-0 gap-1.5 rounded-md px-3 font-medium",
            "bg-white text-black hover:bg-[#e4e4e7]"
          )}
        >
          <Link href="/new">
            <Plus className="size-4" />
            New Project
          </Link>
        </Button>
      </div>
    </header>
  )
}
