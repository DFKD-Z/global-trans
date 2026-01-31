import { VersionItems } from "./VersionItems"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <VersionItems projectId={id} />
}
