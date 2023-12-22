import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="Product/:productId" element={<ProductDetail />} />

          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
