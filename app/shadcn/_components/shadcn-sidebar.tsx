"use client"

import * as React from "react"
import { Component, LayoutPanelLeft, Shapes } from "lucide-react"

import { BrandSwitcher } from "@/components/layout/brand-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function ShadcnSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BrandSwitcher
          name="Shadcn UI"
          logo={<Component />}
          tagLine="Default UI Kit"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Components">
                <LayoutPanelLeft className="size-5" />
                <span>Prototype</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {prototypes.map((component) => (
                  <SidebarMenuSubItem key={component.href}>
                    <SidebarMenuSubButton asChild>
                      <a href={component.href} className="w-full">
                        <span>{component.title}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Components">
                <Shapes className="size-5" />
                <span>Blocks</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {blocks.map((component) => (
                  <SidebarMenuSubItem key={component.href}>
                    <SidebarMenuSubButton asChild>
                      <a href={component.href} className="w-full">
                        <span>{component.title}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

const prototypes = [
  {
    title: "Booking Features",
    href: "/shadcn/prototype/advanced-booking-features",
  },
]

const blocks = [
  {
    title: "Preferences Form",
    href: "/shadcn/blocks/preferences-form",
  },
  {
    title: "No Projects Yet",
    href: "/shadcn/blocks/no-projects-yet",
  },
]
