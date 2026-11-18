import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import ProductListingPage from "./Pages/ProductListingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<ProductListingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
