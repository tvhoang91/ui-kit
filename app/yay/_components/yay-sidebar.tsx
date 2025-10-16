"use client"

import * as React from "react"
import { ChevronRight, Cuboid, SquareTerminal, Store } from "lucide-react"

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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function YaySidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BrandSwitcher
          name="Yay Commerce"
          logo={<Store />}
          tagLine="Modern UX"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Design System</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Components">
                <SquareTerminal className="size-5" />
                <span>Get Started</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {getStarted.map((component) => (
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
            <Collapsible asChild defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Components">
                    <Cuboid className="size-5" />
                    <span>Components</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {components.map((component) => (
                      <SidebarMenuSubItem key={component.href}>
                        <SidebarMenuSubButton asChild>
                          <a href={component.href} className="w-full">
                            <span>{component.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

const getStarted = [
  {
    title: "Introduction",
    href: "/yay/get-started/introduction",
  },
  {
    title: "Installation",
    href: "/yay/get-started/installation",
  },
]

const components = [
  {
    title: "Color Picker",
    href: "/yay/components/color-picker",
  },
  {
    title: "Button",
    href: "/yay/components/button",
  },
  {
    title: "Input",
    href: "/yay/components/input",
  },
  {
    title: "Card",
    href: "/yay/components/card",
  },
]
