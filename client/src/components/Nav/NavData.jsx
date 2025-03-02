const navdata = [
    {
        id: 1,
        name: "Home",
        link: "/",
        submenu: []
    },
    {
        id: 2,
        name: "Rooms",
        link: "/",
        submenu: [
            {
                id: 1,
                name: "Single Room",
                link: "/hotel-room/single-room",
                code: 'SR'
            },
            {
                id: 2,
                name: "Double Room",
                link: "/hotel-room/double-room",
                code: "DR"
            },
            {
                id: 3,
                name: "Family Room",
                link: "/hotel-room/family-room",
                code: "FR"
            },
            {
                id: 4,
                name: "Deluxe Double Room",
                link: "/hotel-room/delux-double-room",
                code: "DDR"
            },
            {
                id: 5,
                name: "Executive Suite",
                link: "/hotel-room/executive-suite",
                code: "ES"
            },
            {
                id: 5,
                name: "Presidential Suite",
                link: "/hotel-room/presidential-suite",
                code: "PS"
            },
            {
                id: 5,
                name: "Honeymoon Suite",
                link: "/hotel-room/honeymoon-suite",
                code: "HS"
            },
            {
                id: 6,
                name: "Royal Villa",
                link: "/hotel-room/royal-villa",
                code: "RV"
            }
        ]
    },
    {
        id: 3,
        name: "Pages",
        link: "/",
        submenu: [
            {
                id: 1,
                name: "About Hotel",
                link: "/about-hotel"
            },
            {
                id: 2,
                name: "Restaurant & Bars",
                link: "/hotel-restaurant"
            },
            {
                id: 4,
                name: "Trips",
                link: "/local-activities"
            },
        ]
    },
    {
        id: 4,
        name: "news",
        link: "/",
        submenu: []
    },

]

export {navdata}