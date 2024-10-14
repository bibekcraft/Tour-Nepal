import TopBar from "../firstpage/TopBar"
// import { Place } from "../firstpage/places"
import Design from "../firstpage/desing"
import Features from "../firstpage/Feature"
import MapofNepal from "../firstpage/MapofNepal"
function Home() {
  return (
    <div>
        <TopBar />
        <Design />
        <Features />
        <MapofNepal />
        {/* <Place /> */}

    </div>
  )
}

export default Home