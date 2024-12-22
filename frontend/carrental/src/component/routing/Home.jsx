import TopBar from "../firstpage/TopBar"
// import { Place } from "../firstpage/places"
import Design from "../firstpage/desing"
import Features from "../firstpage/Feature"
import MapofNepal from "../firstpage/MapofNepal"
import Footer from '../firstpage/Footer'
import Popularthingtodo from '../../new/Popularthingtodo'
import Why from '../../new/Why'
// import NepalTitle from "../firstpage/NepalTitle"
// import Footer from "../firstpage/Footer"
function Home() {
  return (
    <div>
        <TopBar />
        <Design />
        <Features />
        <MapofNepal />
        <Why/>
        <Popularthingtodo/>
        <Footer />
        {/* <NepalTitle /> */}
        {/* <Place /> */}
        {/* <Footer /> */}

    </div>
  )
}

export default Home