"use client"

import {
  PortfolioShell,
  usePortfolioLanguage,
} from "@/components/portfolio/shell"
import { PageBlock, ProjectRow, SectionHeader } from "@/components/portfolio/sections"
import { projects } from "@/lib/portfolio-data"

export default function ProjectsPage() {
  return (
    <PortfolioShell>
      <ProjectsContent />
    </PortfolioShell>
  )
}

function ProjectsContent() {
  const { copy } = usePortfolioLanguage()

  return (
    <>
      <PageBlock className="pt-10 sm:pt-12">
        <p className="text-sm text-muted-foreground">
          {copy.pages.projectsEyebrow}
        </p>
        <h1 className="measure-text mt-3 text-4xl font-medium leading-tight sm:text-5xl">
          {copy.pages.projectsTitle}
        </h1>
        <p className="measure-text mt-5 text-base leading-7 text-muted-foreground">
          {copy.pages.projectsText}
        </p>
      </PageBlock>
      <PageBlock className="border-b-0">
        <SectionHeader
          eyebrow={copy.pages.projectsArchiveEyebrow}
          title={copy.pages.projectsArchiveTitle}
        />
        <div>
          {projects.map((project) => (
            <ProjectRow detailed project={project} key={project.title} />
          ))}
        </div>
      </PageBlock>
    </>
  )
}
