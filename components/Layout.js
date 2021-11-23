import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    const element = (
      <>
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
      </>
    );
  
    return element;
  }
  
  export default Layout;