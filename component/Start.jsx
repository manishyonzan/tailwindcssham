import Image from "next/image"
import Link from "next/link"

const Start = () => {
    return (
        <div className="mt-1 w-full flex flex-col  font-mono text-sm lg:flex  bg-gray-500">
            <div className=" mt-1 mb-40 w-full flex justify-start  font-mono text-sm lg:flex  bg-blue-50 relative">
                <div className="relative  p-5 m-5 hero-title">
                    <h2 className="text-4xl" >Heading</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed amet adipisci harum. Iusto ut et magnam corrupti quisquam at aliquam quibusdam aperiam iure, neque accusantium asperiores reiciendis quo dicta quia!
                </div>

                <div className="flex md:absolute md:top-1/4 md:left-2/4">
                    <Image className="m-5" src="/men.jpg"
                        alt="Women Image"
                        width="250"
                        height={500}
                    />
                    <Image className="m-5" src="/women.jpg"
                        alt="women Image"
                        width="250"
                        height={500}
                    />
                </div>



            </div>
            <div className="w-full flex flex-col" >
                <div className="flex justify-center items-center w-full flex-col sm:flex sm:flex-row">
                    <div>
                        <h1 className="text-3xl text-center">Heading</h1>
                        <p className="text-center">
                            W,skskkskskskskskskksksksknnsb Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Eaque, porro! Ea delectus quaerat

                        </p>

                    </div>
                </div>
                <div className="flex w-full flex-col sm:flex sm:flex-row">
                    <div className="flex ">
                        <div className="m-5 border border-blue-500 p-3 bg-green-100">
                            <Link href="/kid" >
                                <h1 className="text-2xl" >Kids</h1>
                                <Image src="/kid.jpg" alt="Kid img" width={300} height={500} />
                                <p>See more</p>
                            </Link>

                        </div>
                        <div className="m-5 border border-blue-500 p-3 bg-green-100">
                            <Link href="/men">                            <h1 className="text-2xl" >Men</h1>
                                <Image src="/men.jpg" alt="Men image" width={300} height={500} />
                                <p>See more</p>
                            </Link>


                        </div>
                    </div>
                    <div className="flex">
                        <div className="m-5 border border-blue-500 p-3 bg-green-100">
                            <Link href="/women">
                                <h1 className="text-2xl" >Women</h1>
                                <Image src="/women.jpg" alt="my img" width={300} height={500} />
                                <p>See more</p>
                            </Link>

                        </div>
                        <div className="m-5 border border-blue-500 p-2">
                            <h1 className="text-2xl" >Heading</h1>
                            <Image src="/main.png" alt="my img" width={500} height={200} />
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col sm:flex sm:flex-row">
                    <div className="flex ">
                        <div className="m-5 border border-blue-500 p-2">
                            <h1 className="text-2xl" >Heading</h1>
                            <Image src="/main.png" alt="my img" width={500} height={200} />

                        </div>
                        <div className="m-5 border border-blue-500 p-2">
                            <h1 className="text-2xl" >Heading</h1>
                            <Image src="/main.png" alt="my img" width={500} height={200} />

                        </div>
                    </div>
                    <div className="flex">
                        <div className="m-5 border border-blue-500 p-2">
                            <h1 className="text-2xl" >Heading</h1>
                            <Image src="/main.png" alt="my img" width={500} height={200} />

                        </div>
                        <div className="m-5 border border-blue-500 p-2">
                            <h1 className="text-2xl" >Heading</h1>
                            <Image src="/main.png" alt="my img" width={500} height={200} />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Start