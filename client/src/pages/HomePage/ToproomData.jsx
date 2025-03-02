import { SlSizeFullscreen } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";
import { IoBed } from "react-icons/io5";


const toprooms = [
    {
        id: 1,
        name: 'Deluxe Double Room',
        image: 'https://wallpapercave.com/wp/wp3598845.jpg',
        pricepernight: 150,
        optionsroom: [
            {
                id: 1,
                value: '55m',
                icon: SlSizeFullscreen,
            },
            {
                id: 2,
                value: '2 Guests',
                icon: FaUsers,
            },
            {
                id: 3,
                value: '2 beds',
                icon: IoBed,
            }
        ],
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officia aspernatur tempora id asperiores sit temporibus ducimus fugiat quae nulla. Voluptates, aspernatur? Consequuntur, beatae magnam earum itaque quos assumenda ratione.'
    },

    {
        id: 1,
        name: 'Double Room',
        image: 'https://wallpapercave.com/wp/wp3598845.jpg',
        pricepernight: 150,
        optionsroom: [
            {
                id: 1,
                value: '28m',
                icon: SlSizeFullscreen,
            },
            {
                id: 2,
                value: '2 Guests',
                icon: FaUsers,
            },
            {
                id: 3,
                value: '1 beds',
                icon: IoBed,
            }
        ],
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officia aspernatur tempora id asperiores sit temporibus ducimus fugiat quae nulla. Voluptates, aspernatur? Consequuntur, beatae magnam earum itaque quos assumenda ratione.'
    },

    {
        id: 1,
        name: 'Family Room',
        image: 'https://wallpapercave.com/wp/wp3598845.jpg',
        pricepernight: 150,
        optionsroom: [
            {
                id: 1,
                value: '55m',
                icon: SlSizeFullscreen,
            },
            {
                id: 2,
                value: '4 Guests',
                icon: FaUsers,
            },
            {
                id: 3,
                value: '2 beds',
                icon: IoBed,
            }
        ],
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officia aspernatur tempora id asperiores sit temporibus ducimus fugiat quae nulla. Voluptates, aspernatur? Consequuntur, beatae magnam earum itaque quos assumenda ratione.'
    }
]


export {toprooms}