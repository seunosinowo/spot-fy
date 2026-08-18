import { Link } from "react-router-dom"
import {
  Music,
  Play,
  Radio,
  Headphones,
  Disc3,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-playlist.jpg"

function BrandName() {
  return (
    <Link to="/" className="text-lg font-bold tracking-wider text-primary transition-opacity hover:opacity-90">
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
    title: "Choose your platform",
    description: "Decide which streaming platform you want to get playlisted on.",
  },
  {
    title: "Send your song link and budget",
    description: "Message us with your track and the budget you have in mind.",
  },
  {
    title: "Get playlisted",
    description: "We handle the pitch and place your music on curated playlists.",
  },
]

const benefits = [
  {
    title: "Reach new fans",
    description: "Place your music in front of listeners already vibing to your genre.",
  },
  {
    title: "Boost algorithmic growth",
    description: "Playlist adds send strong signals that unlock recommendations and editorial looks.",
  },
  {
    title: "Monetize every stream",
    description: "Turn playlist exposure into royalties, sync opportunities and paid communities.",
  },
  {
    title: "Track real results",
    description: "See streams, saves and audience growth in a clean creator dashboard.",
  },
  {
    title: "Global distribution",
    description: "Promote across African, US, UK and international playlist networks.",
  },
  {
    title: "Creator support",
    description: "Get hands-on help from a team that understands independent artists.",
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
            <a href="https://wa.me/2348056679806" target="_blank" rel="noopener noreferrer">
              <Button size="sm">Get playlisted</Button>
            </a>
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
                Playlist promotion for independent Artists
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Get your music <span className="text-primary">playlisted</span> on the platforms that matter.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Submit once. Get heard on Spotify, Apple Music, YouTube, Audiomack and Tunenova. We help
                Artists turn streams into fans and fans into income.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="https://wa.me/2348056679806" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    Get playlisted
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface glow-brand">
                <img
                  src={heroImage}
                  alt="Red soundwaves and vinyl record on a white background"
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
              <div className="text-4xl font-extrabold text-primary sm:text-5xl">100M+</div>
              <p className="mt-2 text-sm text-muted-foreground">Streams generated for artists</p>
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
              From upload to playlist placement in three simple steps.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                Built for Artists who want more than streams
              </h2>
              <p className="mt-4 text-muted-foreground">
                Soundhalla gives you the tools, network and support to turn a single release into a
                growing career.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl border border-border bg-surface p-5">
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
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
                Join thousands of Artists using Soundhalla to land playlist placements, grow their
                audience and get paid for their work.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/2348056679806" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    Get playlisted
                  </Button>
                </a>
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
              © {new Date().getFullYear()} Soundhalla. Helping Artists Get Heard.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Terms
              </a>
              <a href="https://wa.me/2348056679806" className="transition-colors hover:text-foreground">
                +234 805 667 9806
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
