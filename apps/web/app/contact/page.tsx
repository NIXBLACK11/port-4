"use client"

import { Send } from "lucide-react"
import Link from "next/link"
import { useForm, type UseFormRegister } from "react-hook-form"
import { toast } from "sonner"

import {
  PortfolioShell,
  usePortfolioLanguage,
} from "@/components/portfolio/shell"
import { PageBlock, SectionHeader } from "@/components/portfolio/sections"
import {
  type ContactFormValues,
  useSendContactMessage,
} from "@/app/contact/hooks"
import { links } from "@/lib/portfolio-data"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function ContactPage() {
  return (
    <PortfolioShell>
      <ContactContent />
    </PortfolioShell>
  )
}

function ContactContent() {
  const { copy, t } = usePortfolioLanguage()

  return (
    <>
      <PageBlock className="pt-10 sm:pt-12">
        <p className="text-sm text-muted-foreground">
          {copy.home.contactEyebrow}
        </p>
        <h1 className="measure-text mt-3 text-4xl font-medium leading-tight sm:text-5xl">
          {copy.home.contactTitle}
        </h1>
        <p className="measure-text mt-5 text-base leading-7 text-muted-foreground">
          {copy.home.contactText}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {links.map((link) => {
            const Icon = link.icon

            return (
              <Link
                className="line-solid inline-flex h-9 items-center gap-2 rounded-full border bg-background px-3 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                href={link.href}
                key={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon className="size-3.5" />
                {t(link.label)}
              </Link>
            )
          })}
        </div>
      </PageBlock>

      <PageBlock className="border-b-0">
        <SectionHeader eyebrow="Message" title="Send a message" />
        <ContactForm />
      </PageBlock>
    </>
  )
}

function ContactForm() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      company: "",
    },
  })
  const mutation = useSendContactMessage()

  const onSubmit = form.handleSubmit(
    (values) => {
      mutation.mutate(values, {
        onSuccess: () => form.reset(),
      })
    },
    () => {
      toast.error("Please check the required fields", {
        description: "Name, email, and message are needed.",
      })
    }
  )

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="company">
        Company
      </label>
      <input
        className="hidden"
        id="company"
        tabIndex={-1}
        autoComplete="off"
        {...form.register("company")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name *"
          name="name"
          placeholder="Full Name"
          autoComplete="name"
          register={form.register}
          required
        />
        <Field
          label="Phone"
          name="phone"
          placeholder="Phone No"
          autoComplete="tel"
          register={form.register}
        />
      </div>

      <Field
        label="Email *"
        name="email"
        placeholder="you@example.com"
        type="email"
        autoComplete="email"
        register={form.register}
        required
      />

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-muted-foreground">
          Message *
        </span>
        <textarea
          className="line-solid min-h-64 w-full resize-y rounded-[1.5rem] border bg-background px-5 py-4 text-base leading-7 outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20"
          placeholder="Tell me about your project or just say hi..."
          {...form.register("message", { required: true })}
        />
      </label>

      <button
        className={cn(buttonVariants(), "h-14 w-full rounded-[1.5rem] text-base")}
        type="submit"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Sending..." : "Send message"}
        {mutation.isPending ? null : <Send className="size-4" />}
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  placeholder,
  register,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string
  name: keyof ContactFormValues
  placeholder: string
  register: UseFormRegister<ContactFormValues>
  type?: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-muted-foreground">
        {label}
      </span>
      <input
        className="line-solid h-14 w-full rounded-[1.5rem] border bg-background px-5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20"
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, { required })}
      />
    </label>
  )
}
