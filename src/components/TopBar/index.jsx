import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaFacebookF, FaGooglePlus, FaHome, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '../../assets/images/Screenshot_65-removebg-preview.png'
import { IoMenu } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();
    return (
        <Navbar expand="lg" className="p-0 bg-white">
            <Container className='flex flex-col p-0 ' fluid >
                <div className="m-0 w-screen bg-[#0077b6] flex justify-between md:px-24 py-3 text-white">
                    <div className='flex gap-x-4 items-center pl-3'>
                        <Nav.Link href="#action1">
                            <FaFacebookF />
                        </Nav.Link>
                        <Nav.Link href="#action2">
                            <FaInstagram />
                        </Nav.Link>
                        <Nav.Link href="#action3">
                            <FaXTwitter />
                        </Nav.Link>
                        <Nav.Link href="#action4">
                            <FaYoutube />
                        </Nav.Link>
                        <Nav.Link href="#action5">
                            <FaGooglePlus />
                        </Nav.Link>
                    </div>
                    <Nav.Link href="https://www.karimunjawfun.com" className='border rounded-sm p-1 m-1 md:m-0 font-Poppins'>Reservation Now</Nav.Link>
                </div>
                <div className="brain w-screen lg:flex justify-between md:px-24 py-10 items-center">
                    <Navbar.Brand onClick={() => { navigate("/") }} className='md:flex items-center justify-center cursor-pointer'>
                        <div className='w-full md:w-32 flex justify-center'>
                            <img src={Logo} alt="" className='h-32 w-32 md:mr-5' />
                        </div>
                        <div className=''>
                            <div className='text-4xl flex justify-center w-full font-Montserrat'>
                                Karimunjawa Paradise
                            </div>
                            <div className='text-base py-1 flex justify-center w-full font-Poppins text-gray-500'>
                                Booking Tour and Travel to Karimunjawa
                            </div>
                        </div>
                    </Navbar.Brand>
                    <div className="flex flex-col sm:text-center md:text-center lg:text-right">
                        <div className='flex justify-center w-full text-gray-500 font-Poppins'>
                            Hubungi Kami:
                        </div>
                        <div className='text-3xl flex justify-center w-screen md:w-full font-Montserrat font-medium'>
                            <a href="https://www.karimunjawfun.com" className='text-green-600 no-underline'>(+62) 8908-274-6448</a>
                        </div>
                    </div>
                </div>
                <div className='w-screen bg-slate-200 h-[1px]'></div>
                <div className='flex justify-between w-11/12 bg-[#0077b6] m-3 p-2 rounded-md lg:hidden'>
                    <a href="https://www.karimunjawafun.com" className='text-xl text-white bg-[#00ced1] p-2 rounded-md'>
                        <FaHome />
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#00ced1' }} className='text-white rounded-md flex p-2 focus:!shadow-none'>
                        <div className='text-base -mt-[3px] me-1'>MENU</div>
                        <div className='text-xl '>
                            <IoMenu />
                        </div>
                    </Navbar.Toggle>
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className='lg:w-screen px-24 z-50 mb-2'>
                    <Nav
                        className="me-auto my-2 font-Montserrat"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link onClick={() => { navigate("/") }} className='!text-green-600'>
                            HOME
                        </Nav.Link>
                        <NavDropdown title="PILIHAN PAKET" id="navbarScrollingDropdown" className='!text-black'>
                            <NavDropdown.Item href="#action6">Paket 2 Hari 1 Malam</NavDropdown.Item>
                            <NavDropdown.Item href="#action7">
                                Paket 3 Hari 2 Malam
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Paket 4 Hari 3 Malam
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => { navigate("/about") }} className='text-black'>
                            TENTANG KARIMUNJAWA
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;