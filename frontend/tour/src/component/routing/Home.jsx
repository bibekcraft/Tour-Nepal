import TopBar from "../firstpage/TopBar";
import Design from "../firstpage/desing";
import Features from "../firstpage/Feature";
import MapofNepal from "../firstpage/MapofNepal";
import Footer from '../firstpage/Footer';
import Navbar from '../../nav/Navbar'

function Home() {
  return (
    <>   
     <Navbar/>

      <TopBar />
      <Design />
      <Features />
      <MapofNepal />
      <Footer />
    </>
  );
}

export default Home;
