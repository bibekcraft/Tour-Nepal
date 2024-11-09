import React from 'react';
import './App.css';
import SmoothScrollbarWrapper from '../src/component/scrolling/SmoothScrollbarWrapper '; // Ensure no trailing spaces
import Home from './component/routing/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapOfNepal from '../../carrental/src/component/firstpage/MapofNepal'; // Ensure the correct casing
import Trails from '../src/component/secondpage/Trails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouteDetails from '../src/component/Thirdpage/RouteDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Practise from '../src/component/Thirdpage/Practise';
import SearchBar from '../src/component/firstpage/SearchBar';

// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Error caught by Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

// Main App Component
function App() {
    const queryClient = new QueryClient();

    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <SmoothScrollbarWrapper>
                        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/trails/:id" element={<Trails />} />
  <Route path="/categories/:id" element={<MapOfNepal />} />
  <Route path="/trails" element={<Trails />} />
  <Route path="/route" element={<RouteDetails />} />
  <Route path="/practise" element={<Practise />} />
  <Route path='/search' element={<SearchBar />} />
</Routes>

                    </SmoothScrollbarWrapper>
                </BrowserRouter>
            </QueryClientProvider>
        </ErrorBoundary>
    );
}

export default App;
