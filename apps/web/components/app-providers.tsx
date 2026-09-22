"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"

import { ThemeProvider } from "@/components/theme-provider"

let browserQueryClient: QueryClient | undefined

function getQueryClient() {
  if (!browserQueryClient) {
    browserQueryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 1,
        },
      },
    })
  }

  return browserQueryClient
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <ThemeProvider>{children}</ThemeProvider>
      <Toaster
        closeButton
        position="top-center"
        toastOptions={{
          classNames: {
            toast:
              "border border-border bg-popover text-popover-foreground shadow-lg",
            description: "text-muted-foreground",
          },
        }}
      />
    </QueryClientProvider>
  )
}
