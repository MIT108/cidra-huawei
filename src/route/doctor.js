import Index from "views/doctor/Index.js";
import Consultations from "views/doctor/Consultations.js";
import Appointments from "views/doctor/Appointments";
import AddConsultation from "components/DoctorActions/AddConsultation"

var doctor = [
    {
        path: "/Dashboard",
        name: "Doctor Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin",
        show: true,
    },
    
    {
        path: "/Cosultations",
        name: "Doctor Cosultation",
        icon: "ni ni-single-copy-04 text-primary",
        component: Consultations,
        layout: "/admin",
        show: true,
    },
    
    {
        path: "/Appointments",
        name: "Doctor Appointments",
        icon: "ni ni-list-67 text-primary",
        component: Appointments,
        layout: "/admin",
        show: true,
    },
    
    {
        path: "/AddConsultation",
        name: "Add Consultation",
        icon: "ni ni-list-67 text-primary",
        component: AddConsultation,
        layout: "/admin",
        show: false,
    }
];
export default doctor;