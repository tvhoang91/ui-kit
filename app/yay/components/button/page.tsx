import * as React from "react"
import { Button } from "@/registry/yay/ui/button"
import { LayoutMain } from "@/components/layout/layout-main"
import { LayoutHeader } from "@/components/layout/layout-header"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ButtonPage() {
  return (
    <>
      <LayoutHeader>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Button</BreadcrumbPage>
        </BreadcrumbItem>
      </LayoutHeader>
      <LayoutMain>
        <div className="relative flex min-h-[300px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              Button Component
            </h2>
          </div>
          <div className="relative flex min-h-[200px] items-center justify-center gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </LayoutMain>
    </>
  )
}
