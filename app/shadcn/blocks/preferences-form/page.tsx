import * as React from "react"
import { LayoutHeader } from "@/components/layout/layout-header"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LayoutMain } from "@/components/layout/layout-main"
import { PreferencesForm } from "./preferences-form"

export default function PreferencesFormPage() {
  return (
    <>
      <LayoutHeader>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Get Started</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Preferences Form</BreadcrumbPage>
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
            <PreferencesForm />
          </div>
        </div>
      </LayoutMain>
    </>
  )
}
