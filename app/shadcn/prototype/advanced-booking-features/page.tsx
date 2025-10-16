import * as React from "react"
import { LayoutHeader } from "@/components/layout/layout-header"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LayoutMain } from "@/components/layout/layout-main"
import AdvancedBookingFeatures from "./advanced-booking-features"

export default function AdvancedBookingFeaturesPage() {
  return (
    <>
      <LayoutHeader>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Prototype</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Advanced Booking Features</BreadcrumbPage>
        </BreadcrumbItem>
      </LayoutHeader>
      <LayoutMain>
        <div className="relative my-4 flex min-h-[200px] items-center justify-center gap-2">
          <AdvancedBookingFeatures />
        </div>
      </LayoutMain>
    </>
  )
}
