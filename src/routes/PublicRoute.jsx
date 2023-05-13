import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "./routesPath";


export default function PublicRoute() {

  <Navigate to={ HOME } />
  return (
    <>
      <div>
        <Outlet/>
      </div>
    </>
  );
}