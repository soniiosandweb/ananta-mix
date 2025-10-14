import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import { HelmetProvider } from "react-helmet-async";
import { FormProvider } from "./FormContext";

const Layout = () => {
    return(
        <>
            <HelmetProvider>
                <FormProvider>
                    <Header />
                    <Outlet />
                    <Footer />
                </FormProvider>
            </HelmetProvider>
        </>
        
    )
}

export default Layout