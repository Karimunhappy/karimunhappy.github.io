import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaArrowRightLong } from 'react-icons/fa6';
import Logo from '../../assets/images/LogoTourKarimun.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

function TopBar() {
    const navigate = useNavigate();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;

        // Menampilkan navbar jika scroll ke atas
        if (currentScrollY < lastScrollY) {
            setShowNavbar(true);
            console.log('current1' + currentScrollY)
        }
        // Menyembunyikan navbar jika scroll ke bawah dan posisi sudah lebih dari 100px
        else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setShowNavbar(false);
            console.log('current2' + currentScrollY)
        }

        // Update posisi scroll terakhir
        setLastScrollY(currentScrollY);
        console.log('current3' + currentScrollY)
    };

    useEffect(() => {
        // Menambahkan event listener saat komponen dimount
        window.addEventListener('scroll', controlNavbar);

        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);
    return (
        <Navbar className={`!fixed top-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`} expand="lg" >
            <Container className="grid grid-cols-3 gap-4 md:gap-12">
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className='focus:!shadow-none !border-none' />
                <Navbar.Brand onClick={() => { navigate("/") }} className='cursor-pointer'>
                    <div className='w-32 md:w-44 flex justify-center'>
                        <img src={Logo} alt="" className='w-32 md:w-44' />
                    </div>
                </Navbar.Brand>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} className='lg:px-16 z-50 mb-2'
                    style={{ width: '200px', maxWidth: '80%', padding: '10px' }}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Nav
                        className="me-auto my-2 font-Montserrat"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link onClick={() => { navigate("/") }} className='!text-Navy'>
                            HOME
                        </Nav.Link>
                        <Nav.Link onClick={() => { navigate("/Service") }} className='!text-Navy'>
                            SERVICE
                        </Nav.Link>
                        <Nav.Link onClick={() => { navigate("/Explore") }} className='!text-Navy'>
                            EXPLORE
                        </Nav.Link>
                        <NavDropdown title="PILIHAN PAKET" id="navbarScrollingDropdown" className='!text-Navy'>
                            <NavDropdown.Item onClick={() => { navigate("Paket/2D1N") }}>
                                Paket 2D1N
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("Paket/2D2N") }}>
                                Paket 2D2N
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("Paket/3D2N") }}>
                                Paket 3D2N
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("Paket/4D3N") }}>
                                Paket 4D3N
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => { navigate("/Testimonials") }} className='!text-Navy'>
                            TESTIMONIALS
                        </Nav.Link>
                    </Nav>
                </Navbar.Offcanvas>
                <a href="https://api.whatsapp.com/send?phone=6281353312334" className='text-xs md:text-base rounded-full py-2 !px-3 font-Poppins !flex !bg-Navy text-white no-underline'>
                    RESERVATION
                    <span className='ps-1 md:p-1'>
                        <FaArrowRightLong />
                    </span>
                </a>
            </Container>
        </Navbar>
    );
}

export default TopBar;