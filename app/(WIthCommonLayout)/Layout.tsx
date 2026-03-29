import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1
 
             ">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default DashboardLayout;