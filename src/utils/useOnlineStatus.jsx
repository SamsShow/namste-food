import { useEffect,useState } from "react"

const useOnlineStatus = () => {
    // Check if Online
    const [onlineStatus,setOnlineStatus] = useState(true)

    useEffect (() => {
        window.addEventListener('offline', () => {
            console.log("Offline")
            setOnlineStatus(false)
        })
        window.addEventListener('Online', () => {
            console.log("Online")
            setOnlineStatus(true)
        })
    },[])


    //Boolean Function to check if online or not
    return onlineStatus
}

export default useOnlineStatus