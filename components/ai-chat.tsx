"use client"

import React, { useCallback, useRef, useEffect } from "react"
import { MessageCircle, Send, Loader2, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

/** 单条聊天消息 */
interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  createdAt: Date
}

/** 全局 AI 聊天组件：右下角浮动按钮，点击后从右侧滑出聊天面板 */
export function AiChat() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const [input, setInput] = React.useState("")
  const [sending, setSending] = React.useState(false)
  const listEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    if (open && messages.length) scrollToBottom()
  }, [open, messages.length, scrollToBottom])

  const handleSend = useCallback(async () => {
    const text = input.trim()
    if (!text || sending) return

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      createdAt: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setSending(true)

    try {
      // 占位：后续可替换为 /api/chat 等真实 AI 接口
      await new Promise((r) => setTimeout(r, 600))
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: "收到，这是演示回复。接入真实 AI 后此处可替换为流式响应。",
        createdAt: new Date(),
      }
      setMessages((prev) => [...prev, assistantMsg])
    } finally {
      setSending(false)
    }
  }, [input, sending])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend]
  )

  return (
    <>
      {/* 右下角浮动按钮 */}
      <Button
        type="button"
        variant="default"
        size="icon-lg"
        className="fixed bottom-6 right-6 z-40 size-12 rounded-full shadow-lg"
        aria-label="打开 AI 助手"
        onClick={() => setOpen(true)}
      >
        <MessageCircle className="size-6" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex w-full flex-col border-l p-0 sm:max-w-md"
          showCloseButton={true}
        >
          <SheetHeader className="shrink-0 border-b px-4 py-3">
            <SheetTitle className="flex items-center gap-2 text-base">
              <MessageCircle className="size-5 text-primary" />
              AI 助手
            </SheetTitle>
          </SheetHeader>

          {/* 消息列表 */}
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
            {messages.length === 0 ? (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 text-muted-foreground">
                <MessageCircle className="size-10 opacity-50" />
                <p className="text-sm">输入消息开始对话</p>
              </div>
            ) : (
              <ul className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <li
                    key={msg.id}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {msg.content}
                    </div>
                  </li>
                ))}
                {sending && (
                  <li className="flex justify-start">
                    <div className="flex items-center gap-2 rounded-2xl bg-muted px-4 py-2.5 text-sm text-muted-foreground">
                      <Loader2 className="size-4 animate-spin" />
                      <span>思考中...</span>
                    </div>
                  </li>
                )}
              </ul>
            )}
            <div ref={listEndRef} />
          </div>

          {/* 输入区 */}
          <div className="shrink-0 border-t p-4">
            <div className="flex justify-left mb-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Brain className="size-4" />
                一键翻译
              </Button>
            </div>
            <div className="flex gap-2">
              <Textarea
                placeholder="输入消息，Enter 发送..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={sending}
                rows={2}
                className="min-h-10 resize-none"
              />
              <Button
                type="button"
                size="icon"
                className="shrink-0"
                disabled={!input.trim() || sending}
                onClick={handleSend}
                aria-label="发送"
              >
                {sending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
