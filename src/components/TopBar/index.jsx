import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaArrowRightLong } from 'react-icons/fa6';
import Logo from '../../assets/images/LogoTourKarimun.jpeg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
        <Navbar className={`!fixed top-0 w-full bg-white transition-transform duration-300 z-50 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`} expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Brand onClick={() => { navigate("/") }} className='cursor-pointer md:px-32 lg:px-0'>
                    <div className='w-44 flex justify-center'>
                        <img src={Logo} alt="" className='w-44' />
                    </div>
                </Navbar.Brand>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} className='lg:px-16 z-50 mb-2'>
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
                                Paket 2 Hari 1 Malam
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("Paket/2D2N") }}>
                                Paket 2 Hari 2 Malam
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("Paket/3D2N") }}>
                                Paket 3 Hari 2 Malam
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("Paket/4D3N") }}>
                                Paket 4 Hari 3 Malam
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => { navigate("/Testimonials") }} className='!text-Navy'>
                            TESTIMONIALS
                        </Nav.Link>
                    </Nav>
                </Navbar.Offcanvas>
                <Nav.Link href="https://www.karimunjawahappy.com" className='border rounded-full py-2 !px-3 me-auto font-Poppins !flex !bg-Navy text-white !right-2'>
                    BOOK NOW
                    <span className='p-1'>
                        <FaArrowRightLong />
                    </span>
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default TopBar;