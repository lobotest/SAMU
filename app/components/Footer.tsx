import Link from "next/link"
import { Twitter, Instagram, TwitterIcon as TikTok } from "lucide-react"

const traders = [
  {
    name: "GLOTrades",
    socials: [
      {
        name: "X (Twitter)",
        icon: Twitter,
        href: "https://x.com/ginolopintojr?s=21&t=uFqOmb6FYWO2Sa1T0CvnFA",
        username: "@ginolopintojr",
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/ginolopintojr?igsh=ZGJpM2p1Yzl2MHlv&utm_source=qr",
        username: "@ginolopintojr",
      },
      {
        name: "TikTok",
        icon: TikTok,
        href: "https://www.tiktok.com/@glotradesonly?_t=ZP-8sxoC0vNJfC&_r=1",
        username: "@glotradesonly",
      },
    ],
  },
  {
    name: "SamuTrades",
    socials: [
      {
        name: "X (Twitter)",
        icon: Twitter,
        href: "https://x.com/samuelsantrich?s=21&t=uFqOmb6FYWO2Sa1T0CvnFA",
        username: "@samuelsantrich",
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/fxsamu_",
        username: "@fxsamu_",
      },
      {
        name: "TikTok",
        icon: TikTok,
        href: "https://www.tiktok.com/@samutrades",
        username: "@samutrades",
      },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {traders.map((trader, index) => (
            <div
              key={trader.name}
              className={`space-y-4 ${trader.name === "SamuTrades" ? "order-first md:order-none" : ""}`}
            >
              <h3 className="text-lg font-semibold text-foreground">{trader.name}</h3>
              <div className="flex flex-col space-y-4">
                {trader.socials.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span>{social.name}</span>
                    <span className="text-sm text-muted-foreground">{social.username}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Global Gains, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

