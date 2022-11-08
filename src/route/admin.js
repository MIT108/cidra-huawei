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
import Index from "views/admin/Index.js";
import Doctors from "views/admin/Doctors.js";
import Hospitals from "views/admin/Hospitals";
import Pharmacies from "views/admin/Pharmacies.js";
import ShowHospital from "components/MinAdmin/Hospitals/ShowHospital";
import ShowPharmacie from "components/MinAdmin/Pharmacies/ShowPharmacie";
import ShowDoctor from "components/MinAdmin/Doctors/ShowDoctor";

var admin = [{
    path: "/Admin",
    name: "Admin Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    show: true,
},
{
    path: "/Admin-Hospitals",
    name: "Hospitals",
    icon: "ni ni-building text-primary",
    component: Hospitals,
    layout: "/admin",
    show: true,
},
{
    path: "/Admin-Doctors",
    name: "Doctors",
    icon: "ni ni-single-02",
    component: Doctors,
    layout: "/admin",
    show: true,
},
{
    path: "/Admin-Pharmacies",
    name: "Pharmacies",
    icon: "ni ni-building text-danger",
    component: Pharmacies,
    layout: "/admin",
    show: true,
},
{
    path: "/Admin",
    name: "Consult",
    icon: "ni ni-ambulance text-danger",
    component: Index,
    layout: "/admin",
    show: true,
},
{
    path: "/Admin-ShowHospital",
    name: "Hospitals",
    icon: "",
    component: ShowHospital,
    layout: "/admin",
    show: false,
},
{
    path: "/Admin-ShowPharmacie",
    name: "Pharmacies",
    icon: "",
    component: ShowPharmacie,
    layout: "/admin",
    show: false,
},,
{
    path: "/Admin-ShowDoctor",
    name: "Admin-ShowDoctor",
    icon: "",
    component: ShowDoctor,
    layout: "/admin",
    show: false,
},
];
export default admin;
