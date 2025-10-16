import * as React from "react"
import { LayoutMain } from "@/components/layout/layout-main"
import { LayoutHeader } from "@/components/layout/layout-header"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function InstallationPage() {
  return (
    <>
      <LayoutHeader>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Get Started</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Installation</BreadcrumbPage>
        </BreadcrumbItem>
      </LayoutHeader>
      <LayoutMain>
        Documentation and instructions for installing the Yay UI kit.
      </LayoutMain>
    </>
  )
}
