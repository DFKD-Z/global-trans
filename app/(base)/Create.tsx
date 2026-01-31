'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const PLATFORMS = [
    {
        label: 'App',
        value: 'App',
    },
    {
        label: 'Web',
        value: 'Web',
    },
    {
        label: 'Server',
        value: 'Server',
    },
]

const COUNTRIES = [
    {
        label: '中国',
        value: 'CN',
        lang: 'zh-CN',
    },
    {
        label: '美国',
        value: 'US',
        lang: 'en-US',
    },
    {
        label: '英国',
        value: 'GB',
        lang: 'en-GB',
    },
]

export function CreateDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Create a new project to get started.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description-1">Description</Label>
              <Textarea id="description-1" name="description" defaultValue="A project to track your progress." />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="type-1">Platform</Label>
              <div className="flex gap-2">
                {
                    PLATFORMS.map((platform) => (
                        <div key={platform.value} className="flex items-center space-x-2">
                            <Checkbox id={platform.value} name="type" defaultValue={platform.value} />
                            <Label htmlFor={platform.value}>{platform.label}</Label>
                        </div>
                    ))
                }
              </div>
            </div>
            <div className="grid gap-3">
                <Label htmlFor="country-1">Country</Label>
                <div className="flex gap-4">
                    {
                        COUNTRIES.map((country) => (
                            <div key={country.value} className="flex items-center space-x-2">
                                <Checkbox id={country.value} name="country" defaultValue={country.value} />
                                <Label htmlFor={country.value}>{country.label}</Label>
                            </div>
                        ))
                    }
                </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
