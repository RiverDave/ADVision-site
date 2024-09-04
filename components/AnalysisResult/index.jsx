"use client"
import ResponseCard from "../Cards/ResponseCard"
import { useResponse } from "@/context/responseContext"
import { Button } from "../ui/button"
import { RotateCcw } from "lucide-react"

const AnalysisResult = () => {
  const { response, imagePlaceholder, setResponse, setImagePlaceholder } =
    useResponse()

  if (!response) {
    return null
  }

  return (
    <>
      {/* Imagen Placeholder */}
      <div className="flex flex-col items-center justify-center max-w-[50%] mx-auto mt-8 rounded-md overflow-hidden">
        <img src={imagePlaceholder} alt="placeholder" className="w-full" />
        {/* Clear data response and Iamge placeholder */}
        <Button
          onClick={() => {
            setResponse(null)
            setImagePlaceholder("")
          }}
          className="mt-4"
        >
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
        <ResponseCard title="Advertisement" content={response.advertisement} />
        <ResponseCard
          title="Call to Action"
          content={response.call_to_action}
        />
        <ResponseCard title="Alt Text" content={response.alt_text} />
        <ResponseCard
          title="Product Suggestions"
          content={
            <ul>
              {response.product_suggestions.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          }
        />

        <ResponseCard
          title="Target Audience Insights"
          content={response.target_audience_insights}
        />

        <ResponseCard
          title="Emotional Tone Analysis"
          content={response.emotional_tone_analysis}
        />

        <ResponseCard
          title="SEO Keywords"
          content={
            <ul>
              {response.seo_keywords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
            </ul>
          }
        />

        <ResponseCard
          title="Social Media Caption"
          content={response.social_media_caption}
        />

        <ResponseCard
          title="Content Ideas"
          content={
            <ul>
              {response.content_ideas.map((idea, index) => (
                <li key={index}>{idea}</li>
              ))}
            </ul>
          }
        />

        {/* Hashtags as list */}
        <ResponseCard
          title="Hashtags"
          content={
            <ul>
              {response.hashtags.map((hashtag, index) => (
                <li key={index}>{hashtag}</li>
              ))}
            </ul>
          }
        />

        {/* Marketing Strategy Tips */}
        <ResponseCard
          title="Marketing Strategy Tips"
          content={response.marketing_strategy_tips}
        />

        <ResponseCard
          title="Image Enhancement Suggestions"
          content={response.image_enhancement_suggestions}
        />

        <ResponseCard
          title="Cultural Adaptations"
          content={response.cultural_adaptations}
        />

        <ResponseCard
          title="Legal & Ethical Considerations"
          content={response.legal_ethical_considerations}
        />

        <ResponseCard title="Emojis" content={response.emojis.join(" ")} />
      </div>
    </>
  )
}

export default AnalysisResult
