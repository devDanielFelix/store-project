import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex-column min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
