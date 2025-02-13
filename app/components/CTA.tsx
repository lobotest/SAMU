import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="bg-primary">
      <div className="max-w-2xl mx-auto text-center py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-foreground">
          <span className="block">Ready to start your trading journey?</span>
          <span className="block mt-2">Join Global Gains today.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-6 text-primary-foreground/80">
          Get access to our Discord community, real-time market insights, and our exclusive mentorship program.
        </p>
        <Link href="https://discord.com/invite/globalgains" passHref>
          <Button size="lg" className="mt-8 w-full sm:w-auto bg-background text-foreground hover:bg-secondary">
            Join Discord Now
          </Button>
        </Link>
      </div>
    </div>
  )
}

