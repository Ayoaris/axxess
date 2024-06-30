import { Route, Routes } from "react-router-dom";
import "./css/style.css";

import DefaultLayout from "./layout/DefaultLayout";
import coreRoutes from "./router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {coreRoutes.map(({ path, component: Component }, index) => (
          <Route path={path} key={index} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
