
import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [isOnline,setIsOnline] = useState(true)

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })
        window.addEventListener("online",()=>{
            setIsOnline(true)
        })

        return ()=>{
            window.removeEventListener("offline")
            window.removeEventListener("online")
        }
    },[])

    return isOnline
}

export default useOnlineStatus

