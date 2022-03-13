import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { routes } from "./routes";

export const NavigationContainer = () => {
  const _renderItem = ({ path, component }, index) => (
    <Route path={path} element={component} key={index} />
  );

  return (
    <Router>
      <Routes>
        {routes.map(_renderItem)}
        <Route path="/*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
};
