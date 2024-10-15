import TopBar from "../firstpage/TopBar"
// import { Place } from "../firstpage/places"
import Design from "../firstpage/desing"
import Features from "../firstpage/Feature"
import MapofNepal from "../firstpage/MapofNepal"
import NepalTitle from "../firstpage/NepalTitle"
// import Footer from "../firstpage/Footer"
function Home() {
  return (
    <div>
        <TopBar />
        <Design />
        <Features />
        <MapofNepal />
        <NepalTitle />
        {/* <Place /> */}
        {/* <Footer /> */}

    </div>
  )
}

export default Home