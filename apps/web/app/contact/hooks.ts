"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

export type ContactFormValues = {
  name: string
  phone: string
  email: string
  message: string
  company: string
}

export type VisitorStats = {
  total: number
  live: number
}

type ContactResponse = {
  error?: string
}

export function useSendContactMessage() {
  return useMutation({
    mutationFn: sendContactMessage,
    onMutate: () =>
      toast.loading("Sending message", {
        description: "Forwarding it to Telegram.",
      }),
    onError: (error, _variables, toastId) => {
      toast.error("Message not sent", {
        id: toastId,
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
      })
    },
    onSuccess: (_data, _variables, toastId) => {
      toast.success("Message sent", {
        id: toastId,
        description: "I will reply soon.",
      })
    },
  })
}

export function useVisitorStats() {
  return useQuery({
    queryKey: ["visitor-stats"],
    queryFn: pingVisitorStats,
    refetchInterval: 25_000,
    refetchIntervalInBackground: true,
    staleTime: 20_000,
  })
}

async function sendContactMessage(values: ContactFormValues) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
  const data = (await response.json().catch(() => null)) as ContactResponse | null

  if (!response.ok) {
    throw new Error(data?.error || "Could not send your message.")
  }

  return data
}

async function pingVisitorStats() {
  const visitorId = getVisitorId()
  const response = await fetch("/api/visitors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ visitorId }),
  })

  if (!response.ok) {
    throw new Error("Could not load visitor stats.")
  }

  return (await response.json()) as VisitorStats
}

function getVisitorId() {
  const key = "nixblack-visitor-id"
  const saved = window.localStorage.getItem(key)

  if (saved) {
    return saved
  }

  const next =
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`

  window.localStorage.setItem(key, next)

  return next
}
