import croissant from '../imgs/croissants2.png'

const Story = () => {
    return (
        <div className="w-full bg-[#F0EEE7] flex justify-center pb-[100px]">
            <div className="w-[700px] h-[700px] bg-[#d8d6ce] absolute left-0 rounded-full mt-[80px] ml-[120px]"></div>
            <div className="flex flex-row mt-[80px]">
                <img src={croissant} className="w-auto h-[650px] mt-[30px] z-50" />

                <div className='mt-[20px] ml-[180px]'>
                    <h3 className="text-[#D12030] font-semibold text-xl">ABOUT US</h3>
                    <h1 className="text-[#292929] font-semibold text-6xl tracking-wider mt-[20px]">OUR STORY</h1>

                    <p className="text-[#292929] font-semibold mt-[30px] w-[480px] text-xl">
                        Established in 1997, Cookies Love started as a small family bussiness, using the recipes and
                        style of Grandma Rose. We had the objective of sharing her cuisine with everyone who felt
                        like tasting something exquisite, as well as putting our passion for bakery to good use.
                        <br /><br />
                        As time passed, we expanded into a multi-chain bakery, with thousands of
                        happy customers who visit us day after day, providing them with the tastiest bakery out there, 
                        baked with the most important of ingredients: dedication and love, as grandma once taught us.
                    </p>

                    <button className="bg-[#D12030] text-white text-xl font-semibold px-[20px] py-[7px] rounded-[5px] mt-[60px]
                    hover:bg-[#e73645] transition-all duration-200">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Story