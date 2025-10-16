import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Shadcn Prototyping Area
        </h1>
        <p className="text-muted-foreground">
          Example components from the New York registry for prototyping full
          screens using the default shadcn theme.
        </p>
      </header>
      <main className="flex flex-1 flex-col gap-8">
        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              Hello Example.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="relative flex min-h-[500px] items-center justify-center">
            <Button>Hello</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
