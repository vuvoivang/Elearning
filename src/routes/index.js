import Dashboard from "../containers/AdminTemplate/Dashboard";
import Home from "../containers/HomeTemplate/Home";

const routeHome = [
    {
        path: "/",
        exact: true,
        component: Home

    }
];
const routeAdmin = [{
    path: "/dashboard",
    exact: false,
    component: Dashboard

}];
export { routeHome, routeAdmin };