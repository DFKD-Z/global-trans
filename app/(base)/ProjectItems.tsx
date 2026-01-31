'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import Link from "next/link"
import { FolderCode, PencilIcon, TrashIcon } from "lucide-react"
import { useMemo, useState } from "react"
import { CreateDialog } from "./Create"

export function EmptyItem({ data }: { data?: ProjectItem[] }) {
  const hasData = useMemo(() => data && data.length > 0, [data])
  const title = useMemo(() => hasData ? "No Projects Yet" : "No Projects Found", [hasData])
  const description = useMemo(() => hasData ? "No projects found" : "You haven't created any projects yet. Get started by creating your first project.", [hasData])
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCode />
        </EmptyMedia>
        <EmptyTitle>{
          title
        }</EmptyTitle>
        <EmptyDescription>
          {
            description
          }
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <CreateDialog>
          <Button>Create Project</Button>
        </CreateDialog>
        <CreateDialog>
          <Button variant="outline">Import Project</Button>
        </CreateDialog>
      </EmptyContent>
    </Empty>
  )
}



export type ProjectItem = {
  id: string
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export function CardItem() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Small Card
          <Badge variant="outline" >App</Badge>
        </CardTitle>
        <CardDescription>
          This card uses the small size variant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          The card component supports a size prop that can be set to
          &quot;sm&quot; for a more compact appearance.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Link className="w-3/4" href={`/project/9990s0s99`}>
          <Button variant="outline" size="sm" className="w-full">
            <PencilIcon className="w-4 h-4" />
            Action
          </Button>
        </Link>
        
        <Button variant="destructive" size="sm" className="w-1/4">
          <TrashIcon className="w-4 h-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ProjectItems() {
  const [data, setData] = useState<ProjectItem[]>([
    {
      id: "1",
      name: "Project 1",
      description: "Description 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "Project 2",
      description: "Description 2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      name: "Project 3",
      description: "Description 3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
  return (
    <>
      <EmptyItem data={data}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <CardItem key={item.id} />
        ))}
      </div>

    </>

  )
}