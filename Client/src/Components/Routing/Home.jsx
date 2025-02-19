import TopBar from "../firstpage/TopBar";
import Design from "../firstpage/desing";
import Features from "../firstpage/Feature";
import MapofNepal from "../firstpage/MapofNepal";
import Footer from '../navbar/Footer';
import Navbar from '../navbar/Navbar'
import FrontBlog from "../Blog/FrontBlog";

function Home() {
  return (
    <>   
     <Navbar/>

      <TopBar />
      <Design />
      <Features />
      <MapofNepal />
      <FrontBlog/>
      <Footer />
    </>
  );
}

export default Home;
