import { Outlet } from "react-router";
import Header from "./components/header/header";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const logged = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {logged && <Header />}
      <Outlet />
    </>
  );
};

export default RootLayout;
