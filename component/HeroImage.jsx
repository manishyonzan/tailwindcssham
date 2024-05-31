

const HeroImage = () => {
    
    return (

        <div  className="flex md:absolute md:top-1/4 md:left-2/4">
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

    )
}

export default HeroImage