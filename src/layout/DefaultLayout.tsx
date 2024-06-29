import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="w-full max-w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default DefaultLayout;
