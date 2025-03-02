import { BiSolidDashboard } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { FaBuildingShield } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";


const sidemenu = [
    {
        id: 1,
        name: "Dashboard",
        icon: BiSolidDashboard,
        link: '/Dashboard/Home'
    },
    {
        id: 2,
        name: "Room Management",
        icon: MdWork,
        link: '#'
    },
    {
        id: 3,
        name: "Booking Management",
        icon: BiBuildings,
        link: '#'
    },
    {
        id: 4,
        name: "Guest Management",
        icon: FaBuildingShield,
        link: '#'
    },
    {
        id: 5,
        name: "Staff Management",
        icon: FaUsers,
        link: '#'
    },
    {
        id: 6,
        name: "Housekeeping",
        icon: FaUsers,
        link: '#'
    },
    {
        id: 7,
        name: "Payments & Transactions",
        icon: FaUsers,
        link: '#'
    },
    {
        id: 8,
        name: "Reports & Analytics",
        icon: FaUsers,
        link: '#'
    },
    {
        id: 9,
        name: "Settings",
        icon: BsGearFill,
        link: '#'
    },
]

export {sidemenu}