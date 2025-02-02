import Faq from '../Detailspage/Faq'
import TourBanner from './TourBanner'
import TourDetails from './TourDetails'
import Itinerary from './Itinerary'
import Recommendations from './Recommendations'
import Map from './Map'

function Final() {
  return (
    <div>
        <TourBanner/>
        <TourDetails/>
        <Itinerary/>
        <Recommendations/>
        <Map />

        <Faq/>
    </div>
  )
}

export default Final