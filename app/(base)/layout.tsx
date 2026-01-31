import { ProjectHeader } from "@/components/project-header"

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ProjectHeader />
            {children}
        </div>
    )
}
