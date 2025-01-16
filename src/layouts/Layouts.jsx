import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";


const Layouts = () => {
  return (
    <>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
    </>
  );
};

export default Layouts;
