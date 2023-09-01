import Header from "../../Component/static/Header"
import Hero from "./Hero"
import PostReviews from "./PostReviews"

const LandingScreen = () => {
  return (
    <div className="relative">
        <Header/>
        <Hero/>
        <PostReviews/>
    </div>
  )
}

export default LandingScreen