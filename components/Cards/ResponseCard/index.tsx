"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Check, Copy } from "lucide-react"

interface ResponseCardProps {
  title: string
  content: React.ReactNode | string | undefined
}

const ResponseCard: React.FC<ResponseCardProps> = ({ title, content }) => {
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  const copyToClipboard = () => {
    if (typeof content === 'string') {
      navigator.clipboard.writeText(content)
      setIsCopied(true)
      toast({
        title: "Copied to clipboard",
        description: "The content has been copied to your clipboard",
      })
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } else {
      toast({
        title: "Cannot copy",
        description: "This content cannot be copied to clipboard",
        variant: "destructive",
      })
    }
  }

  const renderContent = () => {
    if (React.isValidElement(content)) {
      return content
    }
    if (typeof content === 'string') {
      return <div className="text-sm text-muted-foreground">{content}</div>
    }
    return <div className="text-sm text-muted-foreground">No data available</div>
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
        {renderContent()}
      </CardContent>
    </Card>
  )
}

export default ResponseCard
