import { Link } from "react-router-dom"
import {
  Music,
  Play,
  Radio,
  Headphones,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Mail,
  Disc3,
  BarChart3,
  Globe,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-playlist.jpg"

function BrandName() {
  return (
    <Link to="/" className="text-lg font-bold tracking-wider text-foreground transition-opacity hover:opacity-90">
      SOUNDHALLA
    </Link>
  )
}

const platforms = [
  {
    name: "Spotify",
    description: "Pitch to curated Spotify playlists and trigger algorithmic Discover Weekly growth.",
    icon: Radio,
  },
  {
    name: "Apple Music",
    description: "Land on Apple Music editorial and independent playlists across genres.",
    icon: Music,
  },
  {
    name: "YouTube",
    description: "Get your tracks synced with Shorts, music videos and creator channels.",
    icon: Play,
  },
  {
    name: "Audiomack",
    description: "Tap into Audiomack's active African and global music community.",
    icon: Headphones,
  },
  {
    name: "Tunenova",
    description: "Boost discovery on Tunenova with targeted playlist and fan campaigns.",
    icon: Disc3,
  },
]

const steps = [
  {
    title: "Upload your track",
    description: "Drop your audio, artwork and release info in one simple submission form.",
  },
  {
    title: "Pick your platforms",
    description: "Choose where you want playlist placement: Spotify, Apple Music, YouTube, Audiomack or Tunenova.",
  },
  {
    title: "Get reviewed",
    description: "Our curators and A&R team review every submission for quality and fit.",
  },
  {
    title: "Grow & get paid",
    description: "Watch streams climb, build your audience and withdraw earnings to your bank.",
  },
]

const benefits = [
  {
    title: "Reach new fans",
    description: "Place your music in front of listeners already vibing to your genre.",
    icon: Users,
  },
  {
    title: "Boost algorithmic growth",
    description: "Playlist adds send strong signals that unlock recommendations and editorial looks.",
    icon: TrendingUp,
  },
  {
    title: "Monetize every stream",
    description: "Turn playlist exposure into royalties, sync opportunities and paid communities.",
    icon: DollarSign,
  },
  {
    title: "Track real results",
    description: "See streams, saves and audience growth in a clean creator dashboard.",
    icon: BarChart3,
  },
  {
    title: "Global distribution",
    description: "Promote across African, US, UK and international playlist networks.",
    icon: Globe,
  },
  {
    title: "Creator support",
    description: "Get hands-on help from a team that understands independent artists.",
    icon: CheckCircle,
  },
]

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandName />
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#platforms" className="transition-colors hover:text-foreground">
              Platforms
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#benefits" className="transition-colors hover:text-foreground">
              Why us
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Talk to us
            </Button>
            <Button size="sm">Start campaign</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Playlist promotion for independent creators
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Get your music <span className="text-primary">playlisted</span> on the platforms that matter.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Submit once. Get heard on Spotify, Apple Music, YouTube, Audiomack and Tunenova. We help
                creators turn streams into fans — and fans into income.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2">
                  Start your playlist campaign <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="h-4 w-4" /> Talk to the team
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Zero monthly fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Fast payouts
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Secure hosting
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface glow-brand">
                <img
                  src={heroImage}
                  alt="Red soundwaves and vinyl record on a black background"
                  width={1344}
                  height={768}
                  className="w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2">
            <div>
              <div className="text-4xl font-extrabold text-primary sm:text-5xl">₦100M+</div>
              <p className="mt-2 text-sm text-muted-foreground">Generated for creators</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-foreground sm:text-5xl">5</div>
              <p className="mt-2 text-sm text-muted-foreground">Major platforms covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Promote on every platform your fans use
            </h2>
            <p className="mt-4 text-muted-foreground">
              One submission reaches playlist curators across the biggest streaming and discovery
              platforms for independent music.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => {
              const Icon = platform.icon
              return (
                <div
                  key={platform.name}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50 hover:bg-surface-elevated"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{platform.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How playlist promotion works</h2>
            <p className="mt-4 text-muted-foreground">
              From upload to playlist placement in four simple steps.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for creators who want more than streams
              </h2>
              <p className="mt-4 text-muted-foreground">
                Soundhalla gives you the tools, network and support to turn a single release into a
                growing career.
              </p>
              <Button size="lg" className="mt-8 gap-2">
                Start selling now <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="rounded-2xl border border-border bg-surface p-5">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-16 text-center sm:px-12 lg:py-20 glow-brand">
            <div className="absolute inset-0 bg-noise" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to get your music heard?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Join thousands of creators using Soundhalla to land playlist placements, grow their
                audience and get paid for their work.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Start selling now <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="h-4 w-4" /> Talk to us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <BrandName />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Soundhalla. Made for digital creators.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
