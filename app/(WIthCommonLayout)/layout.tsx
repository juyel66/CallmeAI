import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="min-h-screen  flex flex-col">
            <Navbar />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default DashboardLayout;