/* eslint-disable react/prop-types */
import "./Layout.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;