import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout() {
  return (
    <div className="">
      <Header />

      <main className="w-full max-w-full h-[983px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default DefaultLayout;
