import RootLayout from "./layouts/RootLayout";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import Lab1Page from "./pages/Lab1Page";
import Lab2Page from "./pages/Lab2Page";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
      urlPattern: "/",
      element: <HomePage></HomePage>,
    },
    {
      id: 2,
      label: "Laboratorium 1",
      url: "/lab1",
      urlPattern: "/lab1",
      element: <Lab1Page></Lab1Page>,
    },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "/lab2/1",
      urlPattern: "/lab2/:id",
      element: <Lab2Page></Lab2Page>,
    },
  ];

  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route path={item.urlPattern} element={item.element}></Route>
          ))}
          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
