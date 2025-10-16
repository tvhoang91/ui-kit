"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

const timezones = [
  { value: "UTC", label: "UTC (Coordinated Universal Time)" },
  { value: "America/New_York", label: "Eastern Time (ET)" },
  { value: "America/Chicago", label: "Central Time (CT)" },
  { value: "America/Denver", label: "Mountain Time (MT)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
  { value: "Europe/London", label: "London (GMT/BST)" },
  { value: "Europe/Paris", label: "Paris (CET/CEST)" },
  { value: "Asia/Tokyo", label: "Tokyo (JST)" },
  { value: "Asia/Shanghai", label: "Shanghai (CST)" },
  { value: "Australia/Sydney", label: "Sydney (AEST/AEDT)" },
] as const

const formSchema = z.object({
  timeslotAvailability: z
    .string({
      required_error: "Please select when booking timeslots are available",
    })
    .min(1, "Please select when booking timeslots are available"),
  customerTimezone: z.boolean(),
  timezone: z.string().optional(),
})

type FormSchema = z.infer<typeof formSchema>

export default function AdvancedBookingFeatures() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      timeslotAvailability: "",
      customerTimezone: false,
      timezone: "UTC",
    },
  })

  const customerTimezoneEnabled = form.watch("customerTimezone")

  function onSubmit(data: FormSchema) {
    toast("Settings saved successfully!", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[340px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius) + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Card className="w-full">
        <CardHeader className="border-b">
          <CardTitle>Advanced Booking Settings</CardTitle>
          <CardDescription>
            Configure how your booking system handles appointments and customer
            preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form
            id="form-advanced-booking"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup>
              <Controller
                name="timeslotAvailability"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="timeslot-availability">
                      When a Booking Timeslot is Available
                    </FieldLabel>
                    <FieldDescription>
                      Control how existing appointments affect timeslot
                      availability for new bookings.
                    </FieldDescription>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id="timeslot-availability"
                        aria-invalid={fieldState.invalid}
                        className="mt-2 [&_[data-element=select-item-description]]:hidden"
                      >
                        <SelectValue placeholder="Select availability rule" />
                      </SelectTrigger>
                      <SelectContent className="w-(--radix-select-trigger-width)">
                        <SelectItem value="approved-only" className="py-4">
                          <div className="flex flex-col gap-1">
                            <div
                              className="font-medium"
                              data-element="select-item-title"
                            >
                              Not Conflict with Approved Appointments Only
                            </div>
                            <div
                              className="text-muted-foreground text-sm text-wrap"
                              data-element="select-item-description"
                            >
                              Approved appointments block timeslots. New
                              bookings start as Pending until you approve them,
                              allowing flexible scheduling management.
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem
                          value="approved-and-pending"
                          className="py-4"
                        >
                          <div className="flex flex-col gap-1">
                            <div
                              className="font-medium"
                              data-element="select-item-title"
                            >
                              Not Conflict with Approved and Pending
                              Appointments
                            </div>
                            <div
                              className="text-muted-foreground text-sm text-wrap"
                              data-element="select-item-description"
                            >
                              Both Approved and Pending appointments block
                              timeslots. You must manually approve new bookings
                              before their timeslots become unavailable to other
                              customers.
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="always-available" className="py-4">
                          <div className="flex flex-col gap-1">
                            <div
                              className="font-medium"
                              data-element="select-item-title"
                            >
                              All Timeslots Always Available
                            </div>
                            <div
                              className="text-muted-foreground text-sm text-wrap"
                              data-element="select-item-description"
                            >
                              Show all time slots regardless of existing
                              bookings. Useful for walk-in services or when you
                              want to manually manage overbooking.
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <FieldSeparator className="my-4" />

              <Controller
                name="customerTimezone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation="horizontal"
                    data-invalid={fieldState.invalid}
                    className="items-start"
                  >
                    <FieldContent className="flex-1 space-y-1">
                      <FieldLabel htmlFor="customer-timezone-switch">
                        Customer Timezone
                      </FieldLabel>
                      <FieldDescription>
                        Display appointment times in the customer&apos;s local
                        timezone on the booking interface. When enabled,
                        customers can select their preferred timezone for
                        viewing available slots.
                      </FieldDescription>
                    </FieldContent>
                    <Switch
                      id="customer-timezone-switch"
                      name={field.name}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {customerTimezoneEnabled && (
                <Controller
                  name="timezone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="mt-4 ml-0"
                    >
                      <FieldLabel htmlFor="default-timezone">
                        Default Timezone
                      </FieldLabel>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="default-timezone"
                          aria-invalid={fieldState.invalid}
                          className="max-w-md"
                        >
                          <SelectValue placeholder="Select a timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          {timezones.map((tz) => (
                            <SelectItem key={tz.value} value={tz.value}>
                              {tz.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FieldDescription>
                        Default timezone shown to customers when they first
                        visit the booking page.
                      </FieldDescription>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              )}

              <FieldSeparator className="my-4" />

              {/* Placeholder for future fields */}
              <div className="border-muted-foreground/25 min-h-[100px] rounded-md border-2 border-dashed p-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Additional booking settings will appear here
                </p>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex gap-2 border-t pt-6">
          <Button type="submit" form="form-advanced-booking">
            Save Settings
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
