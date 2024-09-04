"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Upload, Link, Image as ImageIcon, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useResponse } from "@/context/responseContext"

export default function UploadImage() {
  const { response, setResponse, setImagePlaceholder } = useResponse()
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState("")
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreviewUrl(URL.createObjectURL(selectedFile))
      setImageUrl("")
    }
  }

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value)
    setFile(null)
    setPreviewUrl(null)
  }

  const analizeimage = async () => {
    const formData = new FormData()
    if (file) {
      formData.append("file", file)
    } else if (imageUrl) {
      formData.append("url", imageUrl)
    } else {
      toast({
        title: "Error",
        description: "Please upload an image or enter an image URL",
      })
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      return
    }
    try {
      const response = await fetch("/api/analyze-image", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        const data = await response.json()
        setResponse(data)
        toast({
          title: "Success",
          description: "Image analyzed successfully",
        })
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        throw new Error("Failed to analyze image")
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to analyze image",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setImagePlaceholder(imageUrl)
    analizeimage()
  }

  return (
    <>
      {response === null ? (
        <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] pb-24">
          {/* Title and Call to Action */}
          <div className="text-center mb-8 py-12">
            <h1 className="text-5xl font-bold text-gray-800">
              Transform Images into <br></br>Actionable Insights
            </h1>
            <p className="mt-4 text-gray-600">
              Upload an image and get organized data instantly. Fast, clear, and
              insightful."
            </p>
          </div>
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Analyze Image
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="file-upload"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload Image
                  </Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <Input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="image-url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Or enter image URL
                  </Label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      <Link className="h-4 w-4" />
                    </span>
                    <Input
                      type="url"
                      name="image-url"
                      id="image-url"
                      className="flex-1 block w-full rounded-none rounded-r-md"
                      placeholder="https://example.com/image.jpg"
                      value={imageUrl}
                      onChange={handleUrlChange}
                    />
                  </div>
                </div>
                {previewUrl && (
                  <div className="mt-4">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analizing...
                  </>
                ) : (
                  <>
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Analyze Image
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : null}
    </>
  )
}
