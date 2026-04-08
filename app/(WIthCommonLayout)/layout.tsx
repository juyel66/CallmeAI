import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="min-h-screen  flex flex-col bg-white">
            <Navbar />
            <main className="md:mt-28   ">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default DashboardLayout;