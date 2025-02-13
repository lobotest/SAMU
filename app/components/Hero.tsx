"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const heroText = "Master trading with Global Gains"

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-8 lg:pt-16 lg:pb-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2 animate-fadeInUp">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight font-extrabold text-foreground">
                <span className="block xl:inline">{heroText}</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:text-xl text-muted-foreground lg:mx-0">
                Join our thriving Discord community of traders. Get access to real-time market insights, expert
                analysis, and soon-to-come mentorship programs.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="https://discord.com/invite/globalgains" passHref>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Join Discord
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 animate-fadeInRight">
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(47)-xfsln5ghbFiDqxNxzgKRIu8rTeTh1S.png"
                  alt="Global Gains Discord Community Interface on iPhone"
                  width={600}
                  height={450}
                  className="max-w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

