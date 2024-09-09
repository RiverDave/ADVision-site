"use client"
import ResponseCard from "../Cards/ResponseCard"
import { useResponse } from "@/context/responseContext"
import { Button } from "../ui/button"
import { RotateCcw } from "lucide-react"
import { MarketingSuggestions } from "@/types/Suggestions"

const AnalysisResult = () => {
  const { response, imagePlaceholder, clearAll } = useResponse()

  const handleClearAll = () => {
    clearAll.trigger()
  }

  if (!response) {
    return null
  }

  const safeResponse = response as MarketingSuggestions

  return (
    <>
      {/* Image Placeholder */}
      <div className="flex flex-col items-center justify-center max-w-[50%] mx-auto mt-8 rounded-md overflow-hidden">
        {imagePlaceholder && (
          <img src={imagePlaceholder} alt="placeholder" className="w-full" />
        )}
        {/* Clear data response and Image placeholder */}
        <Button onClick={handleClearAll} className="mt-4">
          <RotateCcw className="h-4 w-4 mr-2" />
          Start Again
        </Button>
      </div>
      {/* Analysis Result Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Analysis Result</h2>
        <p className="text-muted-foreground mt-2">
          Here are the insights and suggestions for your content.
        </p>
      </div>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-8">
        {/* Cards */}
        <ResponseCard
          title="Advertisement"
          content={safeResponse.advertisement}
        />
        <ResponseCard
          title="Call to Action"
          content={safeResponse.call_to_action}
        />
        <ResponseCard title="Alt Text" content={safeResponse.alt_text} />
        <ResponseCard
          title="Product Suggestions"
          content={
            <ul>
              {safeResponse.product_suggestions?.map((product, index) => (
                <li key={index}>{product}</li>
              )) ?? "No product suggestions available"}
            </ul>
          }
        />
        <ResponseCard
          title="Target Audience Insights"
          content={safeResponse.target_audience_insights}
        />
        <ResponseCard
          title="Emotional Tone Analysis"
          content={safeResponse.emotional_tone_analysis}
        />
        <ResponseCard
          title="SEO Keywords"
          content={
            <ul>
              {safeResponse.seo_keywords?.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              )) ?? "No SEO keywords available"}
            </ul>
          }
        />
        <ResponseCard
          title="Social Media Caption"
          content={safeResponse.social_media_caption}
        />
        <ResponseCard
          title="Content Ideas"
          content={
            <ul>
              {safeResponse.content_ideas?.map((idea, index) => (
                <li key={index}>{idea}</li>
              )) ?? "No content ideas available"}
            </ul>
          }
        />
        {/* Hashtags as list */}
        <ResponseCard
          title="Hashtags"
          content={
            <ul>
              {safeResponse.hashtags?.map((hashtag, index) => (
                <li key={index}>{hashtag}</li>
              )) ?? "No hashtags available"}
            </ul>
          }
        />
        {/* Marketing Strategy Tips */}
        <ResponseCard
          title="Marketing Strategy Tips"
          content={safeResponse.marketing_strategy_tips}
        />
        <ResponseCard
          title="Image Enhancement Suggestions"
          content={safeResponse.image_enhancement_suggestions}
        />
        <ResponseCard
          title="Cultural Adaptations"
          content={safeResponse.cultural_adaptations}
        />
        <ResponseCard
          title="Legal & Ethical Considerations"
          content={safeResponse.legal_ethical_considerations}
        />
        <ResponseCard
          title="Emojis"
          content={safeResponse.emojis?.join(" ") ?? "No emojis available"}
        />
      </div>
    </>
  )
}

export default AnalysisResult
