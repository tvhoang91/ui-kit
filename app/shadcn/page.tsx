import * as React from "react"
import { LayoutHeader } from "@/components/layout/layout-header"
import { BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { LayoutMain } from "@/components/layout/layout-main"

export default function Home() {
  return (
    <>
      <LayoutHeader>
        <BreadcrumbItem>
          <BreadcrumbPage>Prototype</BreadcrumbPage>
        </BreadcrumbItem>
      </LayoutHeader>
      <LayoutMain>
        <div className="relative flex min-h-[300px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              Shadcn Prototyping Area
            </h2>
          </div>
          <p className="text-muted-foreground">
            Example components from the New York registry for prototyping full
            screens using the default shadcn theme.
          </p>
        </div>
      </LayoutMain>
    </>
  )
}
