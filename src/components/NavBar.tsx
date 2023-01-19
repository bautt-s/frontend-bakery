import logo from '../imgs/logo.png'
import { FiSearch } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { BsHandbag } from 'react-icons/bs'
import { TbPaperBag } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'

const NavBar = () => {
    return (
        <div className='z-50'>
            <div className="w-full h-[45px] bg-[#D12030] pt-[10px] flex flex-row">
                <div className='ml-[20px]'>
                    <form>
                        <select className='bg-transparent text-white font-semibold'>
                            <option selected value="english">EN</option>
                            <option value="spanish">ES</option>
                        </select>
                    </form>
                </div>

                <div className="flex flex-row text-white font-semibold ml-auto mr-[20px] hover:underline">
                    <span >Have any questions?</span>
                    <span className="ml-[5px]">Contact us!</span>
                </div>
            </div>

            <div className="w-full flex flex-col">
                <div className="w-full h-[90px] flex flex-row items-center border-b-[1px] border-[#dfdfdf]">
                    <h1 className="text-4xl text-[#292929] font-mono font-bold ml-[40px]">Cookies Love</h1>

                    <div className="flex flex-row ml-auto mr-[40px]">
                        <button className="flex flex-row text-[#292929] items-center mr-[30px] group">
                            <BsPerson className="text-2xl" />
                            <h3 className="ml-[10px] font-semibold text-[1.05rem] group-hover:underline">My Account</h3>
                        </button>

                        <button className="flex flex-row text-[#292929] items-center mr-[20px] group">
                            <AiOutlineHeart className="text-2xl" />
                            <h3 className="ml-[10px] font-semibold text-[1.05rem] mr-[10px] group-hover:underline">My Selection</h3>
                        </button>

                        <button className="flex flex-row text-[#292929] items-center mr-[30px] group">
                            <TbPaperBag className="text-2xl" />
                            <h3 className="ml-[10px] font-semibold text-[1.05rem] group-hover:underline">My Orders</h3>
                        </button>

                        <button className="flex flex-row text-[#292929] items-center group">
                            <BsHandbag className="text-2xl" />
                            <h3 className="ml-[10px] font-semibold text-[1.05rem] group-hover:underline">Cart (2)</h3>
                        </button>
                    </div>
                </div>

                <div className="w-full h-[60px] flex flex-row justify-center items-center shadow-[0px_24px_39px_-17px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row text-[#292929] font-bold">
                        <button className="hover:underline">ABOUT US</button>
                        <button className="ml-[35px] hover:underline">GALLERY</button>
                        <button className="ml-[35px] hover:underline">PRODUCTS</button>
                        <button className="ml-[35px] hover:underline">MENU</button>
                        <button className="ml-[35px] hover:underline">VISIT US</button>
                    </div>

                    <div className="ml-[60px]">
                        <form className="flex items-center">
                            <input type="text" className="w-[280px] h-[40px] pl-[15px] bg-transparent rounded-full" placeholder="Looking for a product or category?..." />
                            <button type="submit">
                                <FiSearch className="text-xl text-[#292929] ml-[10px]" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar