"use client"

import Image from "next/image";


const page = ({ params }) => {
    const { urls } = params;


    const sendtobackend = () => {
        console.log("send to backend");
    }


    const data = {
        "Everestbasecamp": {
            "imgurl": "everest.jpg",
            "firsttext": "The 14-Day Everest Base Camp (EBC) trek is one of the world’s most famous and iconic treks, and it is on nearly everyone’s bucket list. During this trek, you will be able to see the breathtaking views of the Khumbu region’s chain of mountains, which includes Mt. Makalu, Mt. Cho Oyo, Mt. Lhotse, and Mt. Lhotse Shar. Beautiful rice-terraced fields, waterfalls, and Sagarmatha National Park (UNESCO world heritage site) are all found on the well-worn path. You may also come upon Syangboche Airport, where you will be treated to some spectacular vistas. This 14-day remote path route takes you to Kala Patthar’s stunning high point, from which you can see the panoramic views of the Himalayas.",
            "secondtext": "A flight from Kathmandu to Lukla, Nepal’s capital, is the first phase of the journey. Trekkers begin their ascent from Lukla to Namche Bazaar, the Sherpa capital at an elevation of roughly 3400 meters. On your route through mountain valleys, you’ll pass through the lively settlement of Namche Bazaar and the famed Tengboche monastery. The 14 Days EBC trek also provides views of the world’s deepest glacier.",
            "thirdtext": "Namche is the key acclimatization site, where trekkers can relax, take in the view, and prepare for the Everest Base Camp journey ahead. On the Everest Base Camp Trek of 14 Days route, a typical day of hiking will last roughly six hours. A short trek to the top of Kala Pattar affords amazing views of the world’s tallest mountain before retracing our steps back to Lukla.Trekking from Khumbu Valley to Everest Base Camp during the spring season is the most ideal (March-May) as the skies are visible and provide an amazing view throughout the journey. You will have drained about half of the oxygen in the air by the time you arrive at base camp. That is why you must train before commencing your trek. Because altitude sickness is so common in high-elevation areas, it is prudent to take the necessary precautions in the event of any symptoms."
        },
        "pokhara": {
            "imgurl": "pokhara.jpg",
            "firsttext": "Kathmandu Pokhara Tour will present the most amazing tour option in Nepal. From witnessing diverse architectural designs to scenic mountain views, visitors can get awesome experience through this tour. Also, one can see magical lake and unique culture of different varieties people",
            "secondtext": "Furthermore, Pokhara, the most admired destination of Nepal is bounded by the attractive range of Annapurna Himalayas. The most eye-catching spots to visit are- Lakeside region of beautiful Fewa Tal and stunning view of Machhapuchhre or fishtail mountain. Visiting Barahi temple at the middle of Phewa Lake, Seti Gorge, KI Singh Bridge, Mahendra Cave, Gupteswor Cave, and the visit to Bindabasini temple adds delight to your tour.",
            "thirdtext": "Besides, one can walk and go for mountain bike to numerous hillsides like Sarangkot to see dazzling views of Himalayan ranges from Sarangkot, visit Begnash Lake, visit World Peace Stupa etc.Offering the sense of calmness of lakes and the beauty of the Himalayas to artistic beauty of  Pokhara Tour designed by us is a perfect pick for those who search for relaxing in the beauty of nature and discover different arts and architecture."
        },
        "Kathmandu": {
            "imgurl": "boudha.jpeg",
            "firsttext": "When you visit Nepal for any purpose such as trekking, climbing or sightseeing tours Kathmandu will be the first priority since you will be first step in here. Kathmandu valley the capital of Nepal itself a world heritage site has many more to see ancient arts, temples, architect. ",
            "secondtext": "You will see nicely sculptured arts in every corner of the city it might be either temple or stupa or palace. ",
            "thirdtext": "Out of seven world heritage sites the four is the main incudes in our world heritage sites day tours those are Pashupatinath, Boudhanath Swayanbhunath and Patan durbar square.After breakfast from the hotel about 9 am our expert tour guide will come to you to drive those places started from Swayambhunath."
        }
    };


    // Get the data.url property for the `boudha` key.
    const urlProperty = data?.[urls];

    // Display the value of the urlProperty variable in the console.
    //   console.log(urlProperty);


    return (
        <div class="min-h-screen p-6 bg-gray-100 flex flex-col justify-center">
            <div className="container max-w-screen-lg mx-auto flex flex-col">
                <h1 className="text-3xl mb-5">{urls}</h1>

                {/* <Image src={`/${data.imgurl}`} alt="icon flower" width={1100} height={900} /> */}
                <Image src={`/${urlProperty.imgurl}`} alt="icon flower" width={1100} height={900} />

                <p className="p-2 text-2xl text-justify">{urlProperty.firsttext} <br />

                    {urlProperty.secondtext}
                    <br />
                    {urlProperty.thirdtext}
                    <br />
                </p>
            </div>
            <div class="container max-w-screen-lg mx-auto mt-5">
                <div>
                    <h2 class="font-semibold text-xl text-gray-600">Enquiry Form for {urls}</h2>
                    <p class="text-gray-500 mb-6">We will get back to you as soon as possible</p>

                    <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div class="text-gray-600">
                                <p class="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div class="lg:col-span-2">
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div class="md:col-span-5">
                                        <label for="full_name">Full Name</label>
                                        <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div class="md:col-span-5">
                                        <label for="email">Email Address</label>
                                        <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                    </div>

                                    <div class="md:col-span-3">
                                        <label for="address">Query</label>
                                        <textarea type="text" cols="50" rows="10" name="query" id="query" class="h-50 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div class="md:col-span-2">
                                        <label for="city">Destination</label>
                                        <input type="text" name="destination" id="destination" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div class="md:col-span-2">
                                        <label for="country">Country / region</label>
                                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </button>
                                            <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="md:col-span-2">
                                        <label for="state">State / province</label>
                                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </button>
                                            <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="md:col-span-5 text-right">
                                        <div class="inline-flex items-end">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sendtobackend}>Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default page