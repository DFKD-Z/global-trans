import { ProjectItems } from "./ProjectItems"

export default function Page({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 flex-col gap-4 p-4 pt-0 max-w-7xl mx-auto">
  <ProjectItems/>
</div>
}