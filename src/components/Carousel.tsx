import mainPicture from '../imgs/carousel1.jpg'
import secondPicture from '../imgs/carousel2.jpg'
import thirdPicture from '../imgs/carousel3.jpg'

const Carousel = () => {
    return (
        <div className="h-full flex flex-row">
            <div className="w-2/3 bg-[#8f8a81] flex items-center">
                <img src={mainPicture} className="object-cover opacity-50" />
                <div className="absolute w-2/3 text-white flex flex-col items-center">
                    <h1 className='text-4xl font-bold'>Taste our products!</h1>
                    <p className="w-[60%] text-center text-xl mt-[20px] leading-relaxed">
                        We believe in making the best bakery products out there. As we've grown,
                        so has our menu and our community, yet our values have stayed the same.
                        We deliver the tastiest food, right from the oven, and directly to your door.
                    </p>

                    <button className="flex flex-row mt-[40px]">
                        <span className="text-2xl">Discover</span>
                    </button>
                </div>
            </div>

            <div className='flex flex-col w-1/3'>
                <div className='w-full bg-[#8f8a81]'>
                    <img src={secondPicture} className="object-cover w-full h-[460px] opacity-70" />
                </div>

                <div className="bg-[#8f8a81]">
                    <img src={thirdPicture} className="object-cover h-auto opacity-70" />
                </div>
            </div>
        </div>
    )
}

export default Carousel