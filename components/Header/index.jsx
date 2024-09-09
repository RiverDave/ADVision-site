"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Image, LogIn, UserPlus, Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = () => (
    // <>
    //   <li>
    //     <Button
    //       variant="ghost"
    //       className="text-muted-foreground hover:text-primary"
    //       asChild
    //     >
    //       <Link href="/docs">Docs</Link>
    //     </Button>
    //   </li>
    //   <li>
    //     <Button
    //       variant="ghost"
    //       className="text-muted-foreground hover:text-primary"
    //       asChild
    //     >
    //       <Link href="/pricing">Pricing</Link>
    //     </Button>
    //   </li>
    //   <li>
    //     <Button
    //       variant="ghost"
    //       className="text-muted-foreground hover:text-primary"
    //       asChild
    //     >
    //       <Link href="/examples">Examples</Link>
    //     </Button>
    //   </li>
    //   <li>
    //     <Button
    //       variant="ghost"
    //       className="text-muted-foreground hover:text-primary"
    //       asChild
    //     >
    //       <Link href="/login">
    //         <LogIn className="mr-2 h-4 w-4" />
    //         Login
    //       </Link>
    //     </Button>
    //   </li>
    //   <li>
    //     <Button asChild>
    //       <Link href="/register">
    //         <UserPlus className="mr-2 h-4 w-4" />
    //         Register
    //       </Link>
    //     </Button>
    //   </li>
    // </>
    <></>
  )

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">AD Vision</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <NavItems />
            </ul>
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-4">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
