import React from 'react'
import { MdOutlineAccessTime } from "react-icons/md";

const ThreeFoodRes = () => {
  return (
    <div className="xl:px-24 md:px-10 px-4 pb-16">
        <div className="md:flex my-4" >
            <div data-aos="zoom-in" className="xl:w-1/3 md:w-full block relative bg-[url(https://wallpapercave.com/wp/wp13869208.jpg)] bg-cover bg-center md:py-12 py-28 flex items-center justify-center">
                <div className='absolute inset-0 bg-black opacity-60'></div>
                <div className="relative">
                    <h1 className="text-white px-16 text-xl font-semibold tracking-[.5em]">Breakfast</h1>
                </div>
            </div>
            <div className="w-full bg-white" data-aos="zoom-in">
                <div className="py-8 xl:px-12 px-8">
                    <div className="flex">
                        <MdOutlineAccessTime className='h-6 w-auto fill-gray-500'/>
                        <p className="pl-2 text-gray-500">7:00 AM - 10:30 AM</p>
                    </div>
                    <div className="mt-4">
                        <p className="">Start your day with a nutritious breakfast:</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">Continental Breakfast: </p>
                            <p className="pl-4 text-[#a4805a]">Croissants, Muffins, Cereals, Yogurt, Fresh Juices</p>
                        </div>
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">American Breakfast: </p>
                            <p className="pl-4 text-[#a4805a]">Pancakes, Waffles, Scrambled Eggs, Bacon, Sausages</p>
                        </div>
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">Sri Lankan Specials: </p>
                            <p className="pl-4 text-[#a4805a]">Hoppers, String Hoppers, Kottu, Milk Rice</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="md:flex my-4">
            <div  data-aos="zoom-in" className="xl:w-1/3 md:w-full block relative bg-[url(https://wallpapercave.com/wp/wp4658964.jpg)] bg-cover bg-center md:py-12 py-28 flex items-center justify-center">
                <div className='absolute inset-0 bg-black opacity-60'></div>
                <div className="relative">
                    <h1 className="text-white px-16 text-xl font-semibold tracking-[.5em]">Lunch & Dinner</h1>
                </div>
            </div>
            <div className="w-full bg-white" data-aos="zoom-in">
                <div className="py-8 xl:px-12 px-8">
                    <div className="flex">
                        <MdOutlineAccessTime className='h-6 w-auto fill-gray-500'/>
                        <p className="pl-2 text-gray-500">12:00 PM - 10:00 PM</p>
                    </div>
                    <div className="mt-4">
                        <p className="">Savor the finest flavors from around the world:</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">Grilled Meats & Seafood: </p>
                            <p className="pl-4 text-[#a4805a]">Steaks, BBQ Ribs, Lobster, Prawns, Salmon</p>
                        </div>
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">Authentic Local Delicacies: </p>
                            <p className="pl-4 text-[#a4805a]">Rice & Curry, Devilled Chicken, Crab Curry</p>
                        </div>
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">International Cuisine: </p>
                            <p className="pl-4 text-[#a4805a]">Italian Pasta, Chinese Stir-Fries, Indian Biryani</p>
                        </div>
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">Healthy Options: </p>
                            <p className="pl-4 text-[#a4805a]">Fresh Salads, Gluten-Free & Vegan Choices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="md:flex my-4">
            <div data-aos="zoom-in" className="xl:w-1/3 md:w-full block relative bg-[url(https://wallpapercave.com/wp/wp9151429.jpg)] bg-cover bg-center md:py-12 py-28 flex items-center justify-center">
                <div className='absolute inset-0 bg-black opacity-60'></div>
                <div className="relative">
                    <h1 className="text-white px-16 text-xl font-semibold tracking-[.5em]">Desserts & Sweets</h1>
                </div>
            </div>
            <div data-aos="zoom-in" className="w-full bg-white">
                <div className="py-8 xl:px-12 px-8">
                    <div className="mt-4">
                        <p className="">Indulge in mouthwatering treats:</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">Classic Cakes & Pastries: </p>
                            <p className="pl-4 text-[#a4805a]">Cheesecake, Brownies, Macarons</p>
                        </div>
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">Ice Cream & Gelato: </p>
                            <p className="pl-4 text-[#a4805a]">Vanilla, Chocolate, Mixed Berry</p>
                        </div>
                        <div className="flex my-4">
                            <p className="font-semibold text-[#4e5c4a]">Local Delights: </p>
                            <p className="pl-4 text-[#a4805a]">Watalappan, Fruit Salad with Ice Cream</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThreeFoodRes