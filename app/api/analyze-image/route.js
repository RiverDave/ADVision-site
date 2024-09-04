import { NextRequest, NextResponse } from "next/server"

const URL = "https://advision-api-918900764545.us-central1.run.app/imgtoad"

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get("file")
    const url = formData.get("url")

    const body = new FormData()
    // Check if the file is uploaded or URL is provided
    if (file) {
      body.append("file", file)
    } else if (url) {
      body.append("url", url)
    } else {
      NextResponse.json({ error: "No file or URL provided" }, { status: 400 })
    }

    const response = await fetch(URL, {
      method: "POST",
      body,
    })

    if (!response.ok) {
      throw new Error("Failed to analyze image")
    }

    const data = await response.json()
    console.log("Data:" + JSON.stringify(data))
    return NextResponse.json(data, {
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(error, {
      status: 500,
    })
  }
}
