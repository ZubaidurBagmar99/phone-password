import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div style={{minHeight:"88vh"}}><Outlet></Outlet></div>
            
            <Footer></Footer>

        </div>
    );
};

export default Main;