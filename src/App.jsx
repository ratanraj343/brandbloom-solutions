import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import InquirySection from "./components/InquirySection";
// import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Product Category */}
          <Route
            path="/products/:category"
            element={<ProductListing />}
          />

          {/* Product Detail */}
          {/* <Route
            path="/products/:category/:productId"
            element={<ProductDetail />}
          /> */}
        </Routes>
        <InquirySection />

        <Footer />
      </div>
    </Router>
  );
}

export default App;