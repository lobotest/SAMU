import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-12 bg-background overflow-hidden md:py-20 lg:py-24" id="testimonials">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-lg sm:text-xl md:text-2xl leading-9 font-medium text-foreground">
              <p>
                &ldquo;Global Gains has completely transformed my trading journey. The Discord community is incredibly
                supportive, and the insights shared by experienced traders are invaluable. I've seen a significant
                improvement in my trading performance since joining.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Image
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(3)-o5yc3UNZiGwiOiXjphQrsT43Um2iEf.svg"
                    alt="Alex Rodriguez profile picture"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-foreground">Alex Rodriguez</div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-muted-foreground">Forex Trader, 3 years experience</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

