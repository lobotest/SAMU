"use client"

import { MessageSquare, TrendingUp, Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  {
    name: "Active Discord Community",
    description: "Connect with fellow traders and share insights in our vibrant Discord server.",
    icon: MessageSquare,
  },
  {
    name: "Real-time Market Analysis",
    description: "Get access to expert analysis and real-time market updates.",
    icon: TrendingUp,
  },
  {
    name: "Exclusive Mentorship Program",
    description: "Learn from experienced traders through our comprehensive mentorship program.",
    icon: Users,
  },
  {
    name: "Live Trading Sessions",
    description: "Participate in live trading sessions and learn strategies in real-time.",
    icon: Zap,
  },
]

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleFeatures((prev) => (prev < features.length ? prev + 1 : prev))
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-12 bg-secondary" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeInUp">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-foreground">
            Elevate Your Trading Game
          </p>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-muted-foreground lg:mx-auto">
            Global Gains provides all the tools and resources you need to succeed in the trading world.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative transform transition-all duration-500 ${
                  index < visibleFeatures ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

