"use client"

import {
  PortfolioShell,
  usePortfolioLanguage,
} from "@/components/portfolio/shell"
import {
  EducationRow,
  PageBlock,
  SectionHeader,
} from "@/components/portfolio/sections"
import { education } from "@/lib/portfolio-data"

export default function EducationPage() {
  return (
    <PortfolioShell>
      <EducationContent />
    </PortfolioShell>
  )
}

function EducationContent() {
  const { copy } = usePortfolioLanguage()

  return (
    <>
      <PageBlock className="pt-10 sm:pt-12">
        <p className="text-sm text-muted-foreground">
          {copy.pages.educationEyebrow}
        </p>
        <h1 className="measure-text mt-3 text-4xl font-medium leading-tight sm:text-5xl">
          {copy.pages.educationTitle}
        </h1>
        <p className="measure-text mt-5 text-base leading-7 text-muted-foreground">
          {copy.pages.educationText}
        </p>
      </PageBlock>
      <PageBlock className="border-b-0">
        <SectionHeader
          eyebrow={copy.pages.educationListEyebrow}
          title={copy.pages.educationListTitle}
        />
        <div>
          {education.map((item) => (
            <EducationRow item={item} key={item.institution} />
          ))}
        </div>
      </PageBlock>
    </>
  )
}
