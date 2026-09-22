"use client"

import {
  PortfolioShell,
  usePortfolioLanguage,
} from "@/components/portfolio/shell"
import { PageBlock, SectionHeader, WritingRow } from "@/components/portfolio/sections"
import { writing } from "@/lib/portfolio-data"

export default function WritingPage() {
  return (
    <PortfolioShell>
      <WritingContent />
    </PortfolioShell>
  )
}

function WritingContent() {
  const { copy } = usePortfolioLanguage()

  return (
    <>
      <PageBlock className="pt-10 sm:pt-12">
        <p className="text-sm text-muted-foreground">
          {copy.pages.writingEyebrow}
        </p>
        <h1 className="measure-text mt-3 text-4xl font-medium leading-tight sm:text-5xl">
          {copy.pages.writingTitle}
        </h1>
        <p className="measure-text mt-5 text-base leading-7 text-muted-foreground">
          {copy.pages.writingText}
        </p>
      </PageBlock>
      <PageBlock className="border-b-0">
        <SectionHeader
          eyebrow={copy.pages.writingIndexEyebrow}
          title={copy.pages.writingIndexTitle}
        />
        <div>
          {writing.map((post) => (
            <WritingRow detailed post={post} key={post.title} />
          ))}
        </div>
      </PageBlock>
    </>
  )
}
