import { FaBed, FaHandHoldingHeart  } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { MdBusinessCenter, MdOutlineEmojiTransportation } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";


const servicedata = [   
    {
        id: 1,
        name: "Accommodation & Room Services",
        optionservice: [
            {
                id: 1,
                name: 'Standard, Deluxe, and Suite Rooms'
            },
            {
                id: 2,
                name: '24/7 Room Service'
            },
            {
                id: 3,
                name: 'Daily Housekeeping'
            },
            {
                id: 4,
                name: 'Laundry & Dry Cleaning'
            },
        ],
        icon: FaBed,
    },

    {
        id: 2,
        name: "Dining & Beverages",
        optionservice: [
            {
                id: 1,
                name: 'In-House Restaurant'
            },
            {
                id: 2,
                name: 'Buffet Breakfast, Lunch, and Dinner'
            },
            {
                id: 3,
                name: 'Coffee Shop & Café'
            },
            {
                id: 4,
                name: 'Bar & Lounge'
            },
            {
                id: 5,
                name: 'In-Room Dining'
            },
        ],
        icon: BiSolidDrink,
    },


    {
        id: 3,
        name: "Recreation & Leisure",
        optionservice: [
            {
                id: 1,
                name: 'Swimming Pool'
            },
            {
                id: 2,
                name: 'Spa & Wellness Center'
            },
            {
                id: 3,
                name: 'Gym & Fitness Center'
            },
            {
                id: 4,
                name: 'Outdoor Activities (Hiking, Cycling, etc.)'
            },
        ],
        icon: FaSwimmingPool,
    },

    {
        id: 4,
        name: "Business & Event Services",
        optionservice: [
            {
                id: 1,
                name: 'Conference & Meeting Rooms'
            },
            {
                id: 2,
                name: 'Event & Wedding Planning'
            },
            {
                id: 3,
                name: 'Business Center with Printing & WiFi'
            },
        ],
        icon: MdBusinessCenter,
    },

    {
        id: 5,
        name: "Travel & Transportation",
        optionservice: [
            {
                id: 1,
                name: 'Airport Shuttle Service'
            },
            {
                id: 2,
                name: 'Car Rental & Taxi Service'
            },
            {
                id: 3,
                name: 'Tour Packages & Sightseeing Assistance'
            },
        ],
        icon: MdOutlineEmojiTransportation,
    },


    {
        id: 6,
        name: "Additional Services",
        optionservice: [
            {
                id: 1,
                name: 'Free High-Speed WiFi'
            },
            {
                id: 2,
                name: 'Concierge Services'
            },
            {
                id: 3,
                name: '24/7 Front Desk Support'
            },
            {
                id: 4,
                name: 'Kids’ Play Area & Babysitting Services'
            },
            {
                id: 5,
                name: 'Pet-Friendly Services (if applicable)'
            },
        ],
        icon: FaHandHoldingHeart,
    },
]

export { servicedata }