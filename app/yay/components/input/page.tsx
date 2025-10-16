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
import { Input } from "@/registry/yay/ui/input"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function InputPage() {
  return (
    <>
      <LayoutHeader>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Input</BreadcrumbPage>
        </BreadcrumbItem>
      </LayoutHeader>
      <LayoutMain>
        <div className="relative flex min-h-[300px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              Input Component
            </h2>
          </div>
          <div className="relative mx-auto flex min-h-[200px] min-w-md items-center justify-center gap-2">
            <Input type="email" placeholder="Email" className="w-full" />
          </div>
        </div>
      </LayoutMain>
    </>
  )
}
