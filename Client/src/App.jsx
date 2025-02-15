import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Components/Routing/Home";
import Final from "./Components/Routing/Final";
import Trails from "./Components/Secondpage/Trails";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/navbar/Footer";
import Blog from "./Components/Blog/Blog";
import ViewBlog from "./Components/Blog/ViewBlog";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import DashboardLayout from "./Components/adminpanel/DashboardLayout "; 
import AddCategory from "./Components/Category/AddCategory";
import ViewCategory from "./Components/Category/ViewCategory";
import AddPlace from "./Components/Place/AddPlace";
import Viewdetails from "./Components/Details/Viewdetails";
import Viewplace from "./Components/Place/Viewplace";
import AddDetails from "./Components/Details/AddDetails";
import ErrorBoundary from "./Components/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MapOfNepal from "./Components/firstpage/MapofNepal";
// import CategoryDisplay from "./Components/Category/CategoryDisplay";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/trails" element={<Trails />} />
          <Route path="/details/:id" element={<Final />} />
          <Route path="/details" element={<Final />} />
          <Route path="/categories/:categoryId/trails" component={<MapOfNepal />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ViewBlog" element={<ViewBlog />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/navbar" element={<Navbar />} />


          
          {/* <Route path="/show-categroy" element={<CategoryDisplay />} /> */}

          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <h1>Dashboard Home</h1>
              </DashboardLayout>
            }
          />
          <Route
            path="/add-category"
            element={
              <DashboardLayout>
                <ErrorBoundary>
                  <AddCategory />
                </ErrorBoundary>
              </DashboardLayout>
            }
          />
                    <Route
            path="/viewCategory"
            element={
              <DashboardLayout>
                <ErrorBoundary>
                  <ViewCategory />
                </ErrorBoundary>
              </DashboardLayout>
            }
          />
          <Route
            path="/add-place"
            element={
              <DashboardLayout>
                <AddPlace />
              </DashboardLayout>
            }
          />
                              <Route
            path="/viewPlace"
            element={
              <DashboardLayout>
                <ErrorBoundary>
                  <Viewplace />
                </ErrorBoundary>
              </DashboardLayout>
            }
          />
          <Route
            path="/add-details"
            element={
              <DashboardLayout>
                <AddDetails />
              </DashboardLayout>
            }
          />
                              <Route
            path="/viewDetails"
            element={
              <DashboardLayout>
                <ErrorBoundary>
                  <Viewdetails />
                </ErrorBoundary>
              </DashboardLayout>
            }
          />
          <Route
            path="/blogs"
            element={
              <DashboardLayout>
                <Blog />
              </DashboardLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
