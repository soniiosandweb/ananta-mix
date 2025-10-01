import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import { HelmetProvider } from "react-helmet-async";

const Layout = () => {
    return(
        <>
            <HelmetProvider>
                <Header />
                <Outlet />
                <Footer />
            </HelmetProvider>
        </>
        
    )
}

export default Layout