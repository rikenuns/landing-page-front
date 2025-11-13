import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/deivid')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/deivid"!</div>
}
