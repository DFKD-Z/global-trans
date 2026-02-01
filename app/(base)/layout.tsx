import { ProjectHeader } from "@/components/project-header"
// import { AuthGuard } from "@/components/auth-guard"

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        // <AuthGuard>
            <div>
                <ProjectHeader />
                {children}
            </div>
        // </AuthGuard>
    )
}
