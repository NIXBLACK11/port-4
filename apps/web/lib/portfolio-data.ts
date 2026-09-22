import {
  BriefcaseBusiness,
  CircleDashed,
  Code2,
  FileText,
  GraduationCap,
  Home,
  Mail,
  PenLine,
  Quote,
  Sparkle,
  Telescope,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa"
import { SiGmail, SiX } from "react-icons/si"

import { blogs as sourceBlogs } from "@/data/blogs"
import { education as sourceEducation } from "@/data/education"
import { experiences as sourceExperiences } from "@/data/experiences"
import { projects as sourceProjects } from "@/data/projects"
import { recommendations as sourceRecommendations } from "@/data/recommendations"

export type Project = {
  title: string
  year: string
  status: "Live" | "Draft" | "Shipped"
  summary: string
  details: string[]
  stack: string[]
  href: string
  image: string
  externalHref?: string
}

export type Writing = {
  title: string
  date: string
  summary: string
  details: string[]
  href: string
  image: string
  externalHref?: string
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  details: string[]
  stack: string[]
  image: string
}

export type Education = {
  institution: string
  degree: string
  period: string
  location: string
  image: string
}

export type Recommendation = {
  name: string
  title: string
  text: string
}

export type SearchItem = {
  title: string
  eyebrow: string
  href: string
  description: string
  icon: LucideIcon
}

export const profile = {
  name: "Siddharth Singh Rana",
  brand: "Nixblack",
  avatar: "/nixblack2.jpg",
  role: "Full Stack Engineer & Founder",
  location: "Remote, India",
  email: "siddharthsinghrana11@gmail.com",
  telegram: "https://t.me/NIXBLACK11",
  twitter: "https://twitter.com/NIXBLACK_",
  linkedin: "https://linkedin.com/in/siddharthsinghrana11",
  github: "https://github.com/NIXBLACK11",
  intro:
    "I started my development journey in 2019 by building an Arduino project that sparked my passion for coding and led me to pursue a Bachelor's in Computer Science and Engineering. During my studies, I was fortunate to be selected by Major League Hacking, where I contributed to Meta's research team on projects like LaserEncoder. Later, I joined Superteam India and founded Nixarcade, a decentralized gaming platform on Solana.\n\nCurrently, I'm working as a Full Stack Developer, creating innovative, user-friendly software solutions. I love building applications that balance performance with great user experience, using Golang, TypeScript, and Web3 to bring meaningful ideas to life.\n\nWhen I'm not coding, you'll find me gaming, playing football, or hiking outdoors.",
}

export const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { label: "Writing", href: "/writing", icon: PenLine },
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Contact", href: "/contact", icon: Mail },
]

export const projects: Project[] = sourceProjects.map((project) => {
  const externalHref = project.links[0]?.url

  return {
    title: project.projectTitle,
    year: project.skills[0]?.text ?? "Project",
    status: externalHref ? "Live" : "Draft",
    summary: project.description[0] ?? "",
    details: project.description,
    stack: project.skills.map((skill) => skill.text),
    href: `/projects#${slugify(project.projectTitle)}`,
    image: project.projPhoto,
    externalHref,
  }
})

export const writing: Writing[] = sourceBlogs.map((post) => ({
  title: post.blogTitle,
  date: "Note",
  summary: post.description[0] ?? "",
  details: post.description,
  href: `/writing#${slugify(post.blogTitle)}`,
  image: post.blogPhotoDark,
  externalHref: post.links[0]?.url,
}))

export const experiences: Experience[] = sourceExperiences.map((experience) => ({
  company: experience.company,
  role: experience.role,
  period: cleanPeriod(experience.period),
  location: experience.location,
  summary: experience.description[0] ?? "",
  details: experience.description,
  stack: experience.skills.map((skill) => skill.text),
  image: experience.logo,
}))

export const education: Education[] = sourceEducation.map((item) => ({
  institution: item.institution,
  degree: item.degree,
  period: cleanPeriod(item.period),
  location: item.location,
  image: item.logo,
}))

export const recommendations: Recommendation[] = sourceRecommendations.map(
  (item) => ({
    name: item.name,
    title: item.title,
    text: item.text,
  })
)

export const principles = [
  {
    title: "Full-stack ownership",
    text: "I build across product surfaces, Go and TypeScript backends, mobile apps, dashboards, and deployment workflows.",
    icon: CircleDashed,
  },
  {
    title: "AI and systems",
    text: "I work on AI chat, data workflows, image generation, multilingual ML, and practical tools that make systems easier to use.",
    icon: FileText,
  },
  {
    title: "Web3 products",
    text: "I have shipped Solana products including Nixarcade, CrowdVault, Chain Poll, NixPay, and NFT marketplace experiments.",
    icon: Telescope,
  },
]

export const shortcuts = [
  { keys: "D", label: "Toggle theme" },
  { keys: "/", label: "Open search" },
  { keys: "⌘ K", label: "Open search" },
  { keys: "G H", label: "Go home" },
  { keys: "G P", label: "Projects" },
  { keys: "G W", label: "Writing" },
  { keys: "G E", label: "Education" },
  { keys: "G C", label: "Contact" },
]

export const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: SiGmail },
  { label: "Telegram", href: profile.telegram, icon: FaTelegramPlane },
  { label: "X", href: profile.twitter, icon: SiX },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: profile.github, icon: FaGithub },
]

export const searchItems: SearchItem[] = [
  {
    title: "Home",
    eyebrow: "Page",
    href: "/",
    description: profile.intro,
    icon: Home,
  },
  {
    title: "Projects",
    eyebrow: "Page",
    href: "/projects",
    description: "Explore shipped products, AI tools, Solana apps, and developer utilities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Writing",
    eyebrow: "Page",
    href: "/writing",
    description: "Read notes about Go, TypeScript, gRPC, and backend engineering.",
    icon: PenLine,
  },
  {
    title: "Education",
    eyebrow: "Page",
    href: "/education",
    description: "Schools, degree, and background.",
    icon: GraduationCap,
  },
  {
    title: "Contact",
    eyebrow: "Page",
    href: "/contact",
    description: "Send a project note, collaboration idea, or quick hello.",
    icon: Mail,
  },
  ...projects.map((project) => ({
    title: project.title,
    eyebrow: `Project · ${project.year}`,
    href: project.href,
    description: project.details.join(" "),
    icon: Code2,
  })),
  ...experiences.map((experience) => ({
    title: `${experience.role} at ${experience.company}`,
    eyebrow: `Experience · ${experience.period}`,
    href: "/#experience",
    description: experience.details.join(" "),
    icon: BriefcaseBusiness,
  })),
  ...education.map((item) => ({
    title: item.institution,
    eyebrow: `Education · ${item.period}`,
    href: "/education",
    description: item.degree,
    icon: GraduationCap,
  })),
  ...recommendations.map((item) => ({
    title: item.name,
    eyebrow: "Recommendation",
    href: "/#recommendation",
    description: item.text,
    icon: Quote,
  })),
  ...writing.map((post) => ({
    title: post.title,
    eyebrow: `Writing · ${post.date}`,
    href: post.href,
    description: post.details.join(" "),
    icon: Sparkle,
  })),
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function cleanPeriod(value: string) {
  return value
    .replaceAll("(", " ")
    .replaceAll(")", "")
    .replace("PRESENT", "Present")
}
