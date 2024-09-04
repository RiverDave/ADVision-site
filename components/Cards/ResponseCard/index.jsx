"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

const ResponseCard = ({ title, content }) => {
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
    setIsCopied(true)
    toast({
      title: "Copied to clipboard",
      description: "The content has been copied to your clipboard",
    })
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex justify-between items-center">
          {title}
          <Button variant="ghost" size="sm" onClick={copyToClipboard}>
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">{content}</div>
      </CardContent>
    </Card>
  )
}

export default ResponseCard
