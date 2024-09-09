import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const FooterItem = () => {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">Product</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            href="/features"
            className="text-muted-foreground hover:text-primary"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className="text-muted-foreground hover:text-primary"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="/integrations"
            className="text-muted-foreground hover:text-primary"
          >
            Integrations
          </Link>
        </li>
        <li>
          <Link
            href="/changelog"
            className="text-muted-foreground hover:text-primary"
          >
            Changelog
          </Link>
        </li>
      </ul>
    </div>
  )
}

const FooterResources = () => {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">Resources</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            href="/docs"
            className="text-muted-foreground hover:text-primary"
          >
            Documentation
          </Link>
        </li>
        <li>
          <Link
            href="/api"
            className="text-muted-foreground hover:text-primary"
          >
            API Reference
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-primary"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className="text-muted-foreground hover:text-primary"
          >
            Support
          </Link>
        </li>
      </ul>
    </div>
  )
}

const FooterCompany = () => {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">Resources</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            href="/docs"
            className="text-muted-foreground hover:text-primary"
          >
            Documentation
          </Link>
        </li>
        <li>
          <Link
            href="/api"
            className="text-muted-foreground hover:text-primary"
          >
            API Reference
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-primary"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className="text-muted-foreground hover:text-primary"
          >
            Support
          </Link>
        </li>
      </ul>
    </div>
  )
}

const FooterMedia = () => {
  return (
    <div className="flex space-x-4 mt-4 sm:mt-0">
      <Link href="#" className="text-muted-foreground hover:text-primary">
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-primary">
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-primary">
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-primary">
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  )
}

const FooterLegal = () => {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">Company</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-primary"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-primary"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-primary"
          >
            Terms of Service
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default function Footer() {
  // Get the current year
  const year = new Date().getFullYear()
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ADVision</h3>
            <p className="text-sm text-muted-foreground">
              This Product is a basic prototype. Features may change, and some
              may not work as expected. Use at your discretion.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {year} ADVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
