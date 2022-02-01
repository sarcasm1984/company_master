import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    const element = (
      <div className="d-flex flex-column overflow-hidden">
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
      </div>
    );
  
    return element;
  }
  
  export default Layout;