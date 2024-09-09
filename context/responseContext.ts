import { create } from "zustand"
import { MarketingSuggestions } from "@/types/Suggestions"

type ResponseState = {
  response: MarketingSuggestions | null
  imagePlaceholder: string | null
  setResponse: (response: MarketingSuggestions) => void
  setImagePlaceholder: (url: string) => void
  clearAll: {
    subscribe: (callback: () => void) => void
    unsubscribe: (callback: () => void) => void
    trigger: () => void
  }
}

export const useResponse = create<ResponseState>((set) => {
  const subscribers: (() => void)[] = []
  return {
    response: null,
    imagePlaceholder: null,
    setResponse: (response) => set({ response }),
    setImagePlaceholder: (url) => set({ imagePlaceholder: url }),
    clearAll: {
      subscribe: (callback) => {
        subscribers.push(callback)
      },
      unsubscribe: (callback) => {
        const index = subscribers.indexOf(callback)
        if (index > -1) {
          subscribers.splice(index, 1)
        }
      },
      trigger: () => {
        set({ response: null, imagePlaceholder: null })
        subscribers.forEach((callback) => callback())
      },
    },
  }
})
