import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MentorshipProgram() {
  return (
    <div className="bg-secondary" id="mentorship">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Global Gains Inner Circle</h2>
            <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
              Elevate your trading skills with our exclusive mentorship program. Learn directly from experienced traders
              and receive personalized guidance to accelerate your growth.
            </p>
            <div className="mt-8">
              <Link href="/inner-circle" passHref>
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <Image
              className="rounded-lg shadow-lg w-full max-w-[135px] mx-auto"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(50)-asTfsrwKD4zo9lnk5lCsymWi2oOMzE.png"
              alt="Global Gains Trading Logo"
              width={67}
              height={67}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

