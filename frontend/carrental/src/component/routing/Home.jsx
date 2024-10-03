import TopBar from "../firstpage/TopBar"
// import { Place } from "../firstpage/places"
import Design from "../firstpage/desing"
import Features from "../firstpage/Feature"
import Nepal from "../firstpage/Nepal"
import VisitCountry from "../firstpage/VisitCountry"
import Footer from "../firstpage/Footer"
function Home() {
  return (
    <div>
        <TopBar />
        <Design />
        <Features />
        <Nepal />
        <VisitCountry />
        {/* <Place /> */}
        <Footer />

    </div>
  )
}

export default Home