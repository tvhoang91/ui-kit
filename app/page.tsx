import * as React from "react"
import Link from "next/link"
import { ChevronRight, Component, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-4xl flex-col gap-8 px-4 py-16">
      <header className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">UI Kit Registry</h1>
        <p className="text-muted-foreground text-lg">
          Custom component registry built on the shadcn template
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Shadcn Prototyping Area */}
          <Card className="group transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-muted group-hover:bg-muted/80 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Component className="h-6 w-6" />
                </div>
                <CardTitle>Shadcn</CardTitle>
              </div>
              <CardDescription>
                Prototyping area for building and testing full screens using the
                default shadcn theme. Example components from the New York
                registry.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/shadcn">
                  View prototypes
                  <ChevronRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Yay Registry */}
          <Card className="group transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-muted group-hover:bg-muted/80 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Store className="h-6 w-6" />
                </div>
                <CardTitle>Yay Registry</CardTitle>
              </div>
              <CardDescription>
                Preview page for the Yay brand UI kit registry components. These
                components are distributed via the shadcn CLI.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/yay">
                  View registry
                  <ChevronRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>About this registry</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              This is a custom component registry built on the shadcn registry
              template. Use the Yay registry to distribute custom React
              components, hooks, and pages to any React project using the{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-xs">
                shadcn
              </code>{" "}
              CLI.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
