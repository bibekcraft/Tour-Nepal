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
import DashboardLayout from "./Components/adminpanel/DashboardLayout "; // Fixed import
import AddCategory from "./Components/Category/AddCategory";
import AddPlace from "./Components/adminpanel/AddPlace";
import AddDetails from "./Components/adminpanel/AddDetails";
import ErrorBoundary from "./Components/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trails" element={<Trails />} />
          <Route path="/details" element={<Final />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ViewBlog" element={<ViewBlog />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/navbar" element={<Navbar />} />

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
            path="/add-place"
            element={
              <DashboardLayout>
                <AddPlace />
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
