import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SplashScreen = () => {
    const nav = useNavigate()
    useEffect(() => {
        const goPage =  async ()  => {
            await sleep(3000)
            nav("/home")

        }
        void goPage()
    }, []);
  return (
    <div>SplashScreen</div>
  )
}

export default SplashScreen