import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex-column min-h-screen">
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
