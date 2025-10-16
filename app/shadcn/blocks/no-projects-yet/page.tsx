import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { ArrowUpRightIcon, FolderCode } from "lucide-react"
import { LayoutHeader } from "@/components/layout/layout-header"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LayoutMain } from "@/components/layout/layout-main"
import NoProjectsYet from "./no-projects-yet"

export default function NoProjectsYetPage() {
  return (
    <>
      <LayoutHeader>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Blocks</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>No Projects Yet</BreadcrumbPage>
        </BreadcrumbItem>
      </LayoutHeader>
      <LayoutMain>
        <div className="relative flex min-h-[300px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              Preferences Form
            </h2>
          </div>
          <div className="relative flex min-h-[200px] items-center justify-center gap-2">
            <NoProjectsYet />
          </div>
        </div>
      </LayoutMain>
    </>
  )
}
