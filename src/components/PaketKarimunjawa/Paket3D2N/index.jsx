import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Diving from '../../../assets/images/Buzo.jpg'


const Paket3D2N = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="bg-white py-44 flex flex-col items-center">
            <div className="w-screen h-[600px] -mt-44"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Diving})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 30%',
                }}
            ></div>
            <h1 className="-mt-96 text-white text-5xl">{t('content.packageTitle3D2N')}</h1>
            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            <h3 className="text-center px-10 md:px-28 py-16 text-white">{t('content.packageSubtitle3D2N')}</h3>
            <div className="shadow-lg p-5 bg-white rounded-lg">
                <h2>{t('content.packageContentTitleSiginjai')}</h2>
                <h5>({t('content.packageContentSubtitle2D1N')})</h5>
                <div className="flex justify-between gap-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>{t('content.packageHeaderContentTypeRoom')}</th>
                                <th>{t('content.packageHeaderContentFacility')}</th>
                                <th>{t('content.packageHeaderContentPrice')}</th>
                                <th>{t('content.packageHeaderContentBooking')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HOMESTAY FAN
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>{t('content.packageContentOutsideBathroom')}, Fan</td>
                                <td>800k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOMESTAY AC</td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,065k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>DUTA KARIMUN
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,180k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>KARIMUN LUMBUNG
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,210k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>LAGUNA INN
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,290k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>SUNRICE HILL VILLA
                                    <br />
                                    ({t('content.packageContentHillsSunriceSeaView')})
                                </td>
                                <td>Standart</td>
                                <td>1,200k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>SUNRICE HILL VILLA
                                    <br />
                                    ({t('content.packageContentHillsSunriceSeaView')})
                                </td>
                                <td>Executive</td>
                                <td>1,330k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>AYU HOTEL & RESORT
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Bungalow</td>
                                <td>1,250k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>AYU HOTEL & RESORT
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Family Room 4P</td>
                                <td>1,230k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>THE BODHI TREE
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Double Room 2P</td>
                                <td>1,180k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>D'SEASON HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Bisnis Room</td>
                                <td>1,450k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>D'SEASON HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Executive Room</td>
                                <td>1,550k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>D'SEASON HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Family Room 4p</td>
                                <td>1,930k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HAPPINESS HILL HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Standart</td>
                                <td>1,550k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HAPPINESS HILL HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Bungalow</td>
                                <td>1,930k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>OMAH ALCHY COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Cendana 2P</td>
                                <td>1,430k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>OMAH ALCHY COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Cendana 3P</td>
                                <td>1,280k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>OMAH ALCHY COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Waru Cottage</td>
                                <td>1,630k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>OMAH ALCHY COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Cemara Cottage 6P</td>
                                <td>1,780k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>MIRABELLE JOGLO & VILLAGE
                                    <br />
                                    ({t('content.packageContentHillwithSeaView')})
                                </td>
                                <td>Bungalow</td>
                                <td>1,380k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>MIRABELLE JOGLO & VILLAGE
                                    <br />
                                    ({t('content.packageContentHillwithSeaView')})
                                </td>
                                <td>Villa Room</td>
                                <td>1,530k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>LEGON WARU
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Trochus Cottage</td>
                                <td>1,780k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>LEGON WARU
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Triton Cottage</td>
                                <td>1,730k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>JAVA PARADISE HOTEL & COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Superior</td>
                                <td>1,700k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>JAVA PARADISE HOTEL & COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Family Room 4P</td>
                                <td>1,750k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>JAVA PARADISE HOTEL & COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Executive</td>
                                <td>1,950k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HALO SUSTAINABLE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Executive</td>
                                <td>1,920k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HALO SUSTAINABLE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Signature 3P</td>
                                <td>1,900k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HALO SUSTAINABLE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Grand Deluxe</td>
                                <td>2,380k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Room Crest</td>
                                <td>2,650k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Sea Hill Cottage</td>
                                <td>3,150k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Studio Sea Front</td>
                                <td>3,250k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Family Sea Hill</td>
                                <td>3,900k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Suite Espranade</td>
                                <td>3,650k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOTEL ROYAL OCEAN BEACH & RESORT
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Superior</td>
                                <td>1,800k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOTEL ROYAL OCEAN BEACH & RESORT
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Deluxe Garden</td>
                                <td>2,150k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOTEL ROYAL OCEAN BEACH & RESORT
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Deluxe Sea View</td>
                                <td>2,550k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOTEL ROYAL OCEAN BEACH & RESORT
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Executive Ocean</td>
                                <td>2,800k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <h2>{t('content.packageContentTitleExpress')}</h2>
                <h5>({t('content.packageContentSubtitle2D1N')})</h5>
                <div className="flex justify-between gap-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>{t('content.packageHeaderContentTypeRoom')}</th>
                                <th>{t('content.packageHeaderContentFacility')}</th>
                                <th>{t('content.packageHeaderContentPrice')}</th>
                                <th>{t('content.packageHeaderContentBooking')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HOMESTAY FAN
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>{t('content.packageContentOutsideBathroom')}, Fan</td>
                                <td>1,050k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOMESTAY AC</td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,265k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>DUTA KARIMUN
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,300k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>KARIMUN LUMBUNG
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,410k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>LAGUNA INN
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,480k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>SUNRICE HILL VILLA
                                    <br />
                                    ({t('content.packageContentHillsSunriceSeaView')})
                                </td>
                                <td>Standart</td>
                                <td>1,380k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>SUNRICE HILL VILLA
                                    <br />
                                    ({t('content.packageContentHillsSunriceSeaView')})
                                </td>
                                <td>Executive</td>
                                <td>1,530k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>AYU HOTEL & RESORT
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Bungalow</td>
                                <td>1,450k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>AYU HOTEL & RESORT
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Family Room 4P</td>
                                <td>1,430k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>THE BODHI TREE
                                    <br />
                                    ({t('content.packageContentCityCenter')})
                                </td>
                                <td>Double Room 2P</td>
                                <td>1,300k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>D'SEASON HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Bisnis Room</td>
                                <td>1,670k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>D'SEASON HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Executive Room</td>
                                <td>1,750k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>D'SEASON HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Family Room 4p</td>
                                <td>2,130k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HAPPINESS HILL HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Standart</td>
                                <td>1,750k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HAPPINESS HILL HOTEL
                                    <br />
                                    ({t('content.packageContentCityCenterHillSeaView')})
                                </td>
                                <td>Bungalow</td>
                                <td>2,130k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>OMAH ALCHY COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Cendana 2P</td>
                                <td>1,650k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>OMAH ALCHY COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Cendana 3P</td>
                                <td>1,630k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>OMAH ALCHY COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Waru Cottage</td>
                                <td>1,930k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>OMAH ALCHY COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Cemara Cottage 6P</td>
                                <td>1,980k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>MIRABELLE JOGLO & VILLAGE
                                    <br />
                                    ({t('content.packageContentHillwithSeaView')})
                                </td>
                                <td>Bungalow</td>
                                <td>1,580k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>MIRABELLE JOGLO & VILLAGE
                                    <br />
                                    ({t('content.packageContentHillwithSeaView')})
                                </td>
                                <td>Villa Room</td>
                                <td>1,730k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>LEGON WARU
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Trochus Cottage</td>
                                <td>1,980k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>LEGON WARU
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Triton Cottage</td>
                                <td>1,960k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>JAVA PARADISE HOTEL & COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Superior</td>
                                <td>1,900k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>JAVA PARADISE HOTEL & COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Family Room 4P</td>
                                <td>1,950k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>JAVA PARADISE HOTEL & COTTAGE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Executive</td>
                                <td>2,150k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HALO SUSTAINABLE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Executive</td>
                                <td>2,130k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HALO SUSTAINABLE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Signature 3P</td>
                                <td>2,100k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HALO SUSTAINABLE
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Grand Deluxe</td>
                                <td>2,580k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Room Crest</td>
                                <td>2,850k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Sea Hill Cottage</td>
                                <td>3,350k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Studio Sea Front</td>
                                <td>3,450k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Family Sea Hill</td>
                                <td>4,100k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>BREVE AZURINE/JIWA
                                    <br />
                                    ({t('content.packageContentSeasideHillBeach')})
                                </td>
                                <td>Suite Espranade</td>
                                <td>3,850k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOTEL ROYAL OCEAN BEACH & RESORT
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Superior</td>
                                <td>2,000k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOTEL ROYAL OCEAN BEACH & RESORT
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Deluxe Garden</td>
                                <td>2,350k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOTEL ROYAL OCEAN BEACH & RESORT
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Deluxe Sea View</td>
                                <td>2,750k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOTEL ROYAL OCEAN BEACH & RESORT
                                    <br />
                                    ({t('content.packageContentSeaside')})
                                </td>
                                <td>Executive Ocean</td>
                                <td>3,000k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <h2 className="mt-10">Fasilitas</h2>
                    <p>* ⁠Tiket Kapal KMC Express Bahari PP (pelabuhan Kartini Jepara - Karimunjawa)
                        <br />
                        * Makan 6x (sudah termasuk Barbeque 1x di pulau)
                        <br />
                        * Mobil transport pelabuhan - penginapan
                        <br />
                        * peralatan Snorkeling lengkap
                        <br />
                        * Life Jacket/Pelampung
                        <br />
                        * Kapal Kecil buat Tour Laut
                        <br />
                        * Air mineral
                        <br />
                        * Perlengkapan P3k
                        <br />
                        * Roti buat Makan Ikan saat Snorkeling
                        <br />
                        * Guide Tour Bersertifikat
                        <br />
                        * ⁠Biaya sandar Kapal
                        <br />
                        * ⁠Foto Underwater
                        <br />
                        * ⁠Foto Upwater
                        <br />
                        * ⁠Tiket Masuk Wisata
                    </p>
                    <h4>Tidak Termasuk</h4>
                    <p>
                        * Transportasi ke jepara
                        <br />
                        * ⁠biaya tambaha Seperti Jetski
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Paket3D2N;