import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { routes } from "./routes";

export const NavigationContainer = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route exact path={route.path} element={route.component} key={index} />
        ))}
        <Route exact={false} path="/*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
};
