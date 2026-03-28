import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            
           
            <Navbar />
             {children}
            <Footer />
            
        </div>
    );
};

export default DashboardLayout;