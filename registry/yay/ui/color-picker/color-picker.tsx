"use client"

import "./color-picker.css"

import { useUncontrolled } from "@/registry/yay/hooks/use-uncontrolled"
import { useRef, useState } from "react"
import {
  ColorPalette,
  __experimentalInputControl as InputControl,
  Button as WPButton,
  ColorPicker as WPColorPicker,
} from "@wordpress/components"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/yay/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/yay/ui/popover"
import { Check, Copy } from "lucide-react"

interface ColorPickerProps {
  value?: string
  defaultColor?: string
  onChangeColor?: (color: string) => void
  className?: string
  disabled?: boolean
}

export function ColorPicker({
  value: _value,
  defaultColor,
  onChangeColor: _onChangeColor,
  className,
  disabled = false,
}: ColorPickerProps) {
  const colors = [
    { name: "Black", color: "#181818" },
    { name: "White", color: "#F5F5F5" },
    { name: "Red", color: "#E7210A" },
    { name: "Orange", color: "#F54A00" },
    { name: "Green", color: "#5EA500" },
    { name: "Blue", color: "#165CFB" },
    { name: "Yellow", color: "#FDC700" },
  ]

  const [value, onChange] = useUncontrolled({
    value: _value,
    defaultValue: defaultColor,
    finalValue: "#000000",
    onChange: _onChangeColor,
  })
  const inputValue = value.replace(/^#/, "").slice(0, 6)

  const [copied, setCopied] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleOpenAutoFocus = (event: Event) => {
    const isColorInPalette = colors.some((color) => color.color === value)

    if (!isColorInPalette) {
      event.preventDefault()
      return
    }

    event.preventDefault()
  }

  const handleChange = (newColor?: string) => {
    if (!newColor) return
    const normalized = newColor.startsWith("#") ? newColor : `#${newColor}`
    const trimmed = normalized.replace(/^#/, "").slice(0, 6)
    const finalColor = `#${trimmed}`
    onChange?.(finalColor)
  }

  const handleInputChange = (nextValue?: string) => {
    const raw = nextValue ?? ""
    const truncated = raw.slice(0, 6)
    const candidate = `#${truncated}`
    const isValidHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(candidate)

    if (isValidHex) {
      onChange?.(candidate)
    } else {
      onChange?.("#000000")
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy!", err)
    }
  }

  const handleClear = () => {
    onChange?.(defaultColor ?? "#000000")
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-[110px] cursor-pointer justify-start p-1",
            className
          )}
        >
          <span
            className="h-6.5 w-6.5 rounded-sm border"
            style={{ backgroundColor: value }}
          />
          <span className="text-start font-normal">{value}</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-fit min-w-[200px] px-1 py-3"
        align="start"
        sideOffset={5}
        onOpenAutoFocus={handleOpenAutoFocus}
        ref={contentRef}
      >
        <div className="flex flex-col gap-2">
          <div className="px-2">
            <ColorPalette
              colors={colors}
              value={value}
              onChange={(newColor = "#000000") => handleChange(newColor)}
              disableCustomColors={true}
              clearable={false}
              className="yay-wp-color-palette"
            />
          </div>

          <WPColorPicker
            className="yay-wp-color-picker"
            color={value}
            onChange={handleChange}
            enableAlpha={false}
            defaultValue={defaultColor}
            copyFormat="hex"
          />

          <div className="flex items-center justify-between gap-3 px-3">
            <div className="flex items-center gap-2">
              <InputControl
                __next40pxDefaultSize
                prefix={<span className="ml-3">#</span>}
                value={inputValue}
                onChange={handleInputChange}
                className="yay-wp-color-input"
              />
              <WPButton onClick={handleCopy}>
                {copied ? (
                  <Check className="text-muted-foreground size-4" />
                ) : (
                  <Copy className="text-muted-foreground size-4" />
                )}
              </WPButton>
            </div>
            <Button
              className="w-fit cursor-pointer"
              variant="ghost"
              type="button"
              onClick={handleClear}
            >
              Reset
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
