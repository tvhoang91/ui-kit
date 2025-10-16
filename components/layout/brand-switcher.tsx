"use client"

import * as React from "react"
import { ChevronsUpDown, Component, Home, Store } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function BrandSwitcher(currentBrand: {
  name: string
  logo: React.ReactNode
  tagLine: string
}) {
  const { isMobile } = useSidebar()
  const { name, logo, tagLine } = currentBrand

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-black text-white [&>svg]:size-5">
                {logo}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{name}</span>
                <span className="truncate text-xs">{tagLine}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Brands
            </DropdownMenuLabel>
            <DropdownMenuItem asChild className="gap-2 p-2">
              <Link href="/yay">
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <Store className="size-3.5 shrink-0" />
                </div>
                Yay Commerce
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="gap-2 p-2">
              <Link href="/shadcn">
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <Component className="size-3.5 shrink-0" />
                </div>
                Shadcn
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="gap-2 p-2">
              <Link href="/">
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Home className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">Home</div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
