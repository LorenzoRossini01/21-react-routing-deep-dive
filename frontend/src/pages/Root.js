import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
        {navigation.state === "loading" && <div>Loading...</div>}
      </main>
    </>
  );
};

export default RootLayout;
