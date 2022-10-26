/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/super_admin/Index.js";
import Admins from "views/super_admin/Admins.js";
// import Profile from "views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/authentication/Register.js";
// import Login from "views/authentication/Login.js";
// import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var super_admin = [{
        path: "/SuperAdmin",
        name: "Super Admin Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "ni ni-planet text-blue",
        component: Icons,
        layout: "/admin"
    },
    // {
    //     path: "/maps",
    //     name: "Maps",
    //     icon: "ni ni-pin-3 text-orange",
    //     component: Maps,
    //     layout: "/admin"
    // },
    {
        path: "/List-Admin",
        name: "Admins",
        icon: "ni ni-single-02 text-yellow",
        component: Admins,
        layout: "/admin"
    },
    // {
    //     path: "/tables",
    //     name: "Tables",
    //     icon: "ni ni-bullet-list-67 text-red",
    //     component: Tables,
    //     layout: "/admin"
    // },
    // {
    //     path: "/login",
    //     name: "Login",
    //     icon: "ni ni-key-25 text-info",
    //     component: Login,
    //     layout: "/auth"
    // },
    // {
    //     path: "/register",
    //     name: "Register",
    //     icon: "ni ni-circle-08 text-pink",
    //     component: Register,
    //     layout: "/auth"
    // }
];
export default super_admin;
