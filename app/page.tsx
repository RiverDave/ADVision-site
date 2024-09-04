import AnalysisResult from "@/components/AnalysisResult"
import UploadImage from "@/components/UploadImage"

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto p-2">
      <UploadImage />
      <AnalysisResult />
    </main>
  )
}
