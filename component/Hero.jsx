"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const Hero = () => {
    return (
        <div className="mt-1 w-full flex flex-col  font-mono text-sm lg:flex  bg-gray-500">
            <div className=" mt-1 mb-40 w-full flex justify-around  font-mono text-sm lg:flex  bg-blue-50">
                <div className="p-1 m-5 hero-title">
                    <h2 className="text-4xl" >Welcome </h2>
                    <p>we are committed to providing you with the best travel
                        experience possible. Our team of experts is dedicated to ensuring that your trip is memorable,
                        enjoyable, and stress-free. We offer a wide range of travel services, including
                        hotel reservations, and tour packages. Whether you’re looking for a relaxing nature
                        vacation or an adventurous trek through the Himalayas, we’ve got you covered.
                        Let us help you plan your next adventure today!</p>
                    <button className="bg-transparent border border-orange-600 p-2 m-2 rounded-md">
                        <Link href="/images">See the Destinations</Link>
                    </button>
                </div>

                <div className="flex hidden sm:block ">
                    <motion.div initial={{ y: 0, opacity: 0, initial: false }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} animate={{ y: 100 }} className="flex p-5" >
                        <Image className="m-5" src="/machapuchre2.jpg"
                            alt="Women Image"
                            width="250"
                            height={500}
                        />
                        <Image className="m-5" src="/trekking.jpg"
                            alt="women Image"
                            width="250"
                            height={500}
                        />
                    </motion.div>

                </div>



            </div>
            <div className="w-full flex flex-col" >
                <div className="flex justify-center items-center w-full flex-col sm:flex sm:flex-row">
                    <div>
                        <h1 className="text-3xl text-center text-gray-800">Why Choose Us</h1>
                        <p className="text-center text-gray-800">
                            We are providing Travel and Trek services with best hospitality   

                            <br />
                            
                            from last 9 years
                        </p>

                    </div>
                </div>
                <div className="flex mt-40 w-full flex-col sm:flex sm:flex-row sm:justify-center">
                    <div className="w-full sm:w-1/2 flex justify-center">
                        <Image className="decorate-box" src={"/lake.jpg"} alt="women pic" width={500} height={600} />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <motion.div initial={{ y: -50, opacity: 0, initial: false }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} animate={{ y: 0 }} className="flex  p-5" >
                            <Image src="/icona.png" alt="icon flower" width={200} height={100} />
                            <div className="flex flex-col m-2">
                                <h2 className="text-3xl text-gray-800">
                                    Local expertise
                                </h2>
                                <p className="text-gray-800">We offer you the benefit of local knowledge and expertise, provide you with insights
                                    into the best places to visit, the most convenient modes of transportation, and the most authentic local experiences.</p>
                            </div>

                        </motion.div>
                        <motion.div initial={{ y: -50, opacity: 0, initial: false }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} animate={{ y: 0 }} className="flex p-5" >
                            <Image src="/iconb.png" alt="icon flower" width={200} height={100} />
                            <div className="flex flex-col m-2">
                                <h2 className="text-3xl text-gray-800">
                                    Customized itineraries
                                </h2>
                                <p className="text-gray-800"> We can help you create a customized itinerary that caters to your specific
                                    interests and preferences. They can help you plan your trip
                                    according to your budget, schedule, and preferred activities</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ y: -50, opacity: 0, initial: false }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} animate={{ y: 0 }} className="flex p-5" >
                            <Image src="/icona.png" alt="icon flower" width={200} height={100} />
                            <div className="flex flex-col m-2">
                                <h2 className="text-3xl text-gray-800">
                                    Convenience
                                </h2>
                                <p className="text-gray-800"> We can take care of all the details of your trip, from booking flights and
                                    accommodations to arranging tours and activities.
                                    This can save you time and effort, allowing you to focus on enjoying your trip</p>
                            </div>
                        </motion.div>
                    </div>

                </div>

                <div className="flex w-full flex-col mt-40">
                    <div className="flex w-full justify-center">
                        <h1 className="text-4xl text-center " >Popular Destination</h1>
                    </div>

                    <div className="flex w-full flex-col sm:flex sm:flex-row sm:justify-center">
                        <div className="w-full sm:w-1/3 flex flex-col justify-center">
                            <div className="flex flex-col m-10 items-center border border-blue-100">
                              
                                <div className="text-center bg-blue-100 p-5">
                                    <Image src="/pokhara.jpg" alt="icon flower" width={400} height={300} />
                                    <h1 className="text-4xl m-2">Pokhara</h1>
                                    <h2 className="text-3xl m-2">$350</h2>
                                    <p className="m-3 text-center">Reserve Now & Pay Later</p>
                                    <Link href="/Enquiry/pokhara">
                                        <button className="bg-transparent w-full border border-blue-900 p-2 m-2 rounded-md hover:text-blue-500 hover:border-blue-500">
                                            Enquiry
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/3 flex flex-col justify-center" id="destination">

                            <div className="flex flex-col m-10 items-center justify-center border border-blue-100">
                                
                                <div className="text-center bg-blue-100 p-5">
                                    <Image src="/eversest.jpeg" alt="icon flower" width={400} height={300} />
                                    <h1 className="text-4xl m-2">Everest Base Camp</h1>
                                    <h2 className="text-3xl m-2">$1200</h2>
                                    <p className="m-3 text-center">Reserve Now & Pay Later</p>
                                   
                                        <Link href="/Enquiry/Everestbasecamp">
                                            <button className="bg-transparent w-full border border-blue-900 p-2 m-2 rounded-md hover:text-blue-500 hover:border-blue-500">
                                                Enquiry
                                            </button>
                                        </Link>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/3 flex flex-col justify-center">
                            <div className="flex flex-col m-10 items-center border border-blue-100">
                            
                                <div className="text-center bg-blue-100 p-5">
                                    <Image src="/boudha.jpeg" alt="icon flower" width={400} height="300" />
                                    <h1 className="text-4xl m-4">Kathmandu</h1>
                                    <h2 className="text-3xl m-2">$80</h2>
                                    <p className="m-3 text-center">Reserve Now & Pay Later</p>
                                        <Link href="/Enquiry/Kathmandu">
                                            <button className="bg-transparent w-full border border-blue-900 p-2 m-1 rounded-md hover:text-blue-500 hover:border-blue-500">
                                            Enquiry
                                        </button>
                                        </Link>
                                
                                </div>
                            </div>
                        </div>

                    </div>


                </div>








            </div>

        </div>
    )
}

export default Hero