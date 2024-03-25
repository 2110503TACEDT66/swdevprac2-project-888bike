import { useEffect } from "react"

export default function useWindowListener ({ eventType, listener } : {eventType: string, listener: EventListener}) {
    useEffect(() => {
        window.addEventListener(eventType, listener)
        return () => {
            window.removeEventListener(eventType, listener)
        }
    }, [])
  
    
}