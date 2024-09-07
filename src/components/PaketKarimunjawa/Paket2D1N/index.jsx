import { Table } from "react-bootstrap";
import Snorkling from '../../../assets/images/IMG-20240730-WA0021.jpg'
import { useTranslation } from "react-i18next";

const Paket2D1N = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="bg-white py-44 flex flex-col items-center">
            <div className="w-screen h-[600px] -mt-44"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Snorkling})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 30%',
                }}
            ></div>
            <h1 className="-mt-96 text-white text-5xl">{t('content.packageTitle2D1N')}</h1>
            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            <h3 className="text-center px-10 md:px-28 py-16 text-white">{t('content.packageSubtitle2D1N')}</h3>
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
                                <td>595k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOMESTAY AC</td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>675k</td>
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
                                <td>740k</td>
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
                                <td>760k</td>
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
                                <td>800k</td>
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
                                <td>770k</td>
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
                                <td>820k</td>
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
                                <td>795k</td>
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
                                <td>770k</td>
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
                                <td>740k</td>
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
                                <td>950k</td>
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
                                <td>1,025k</td>
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
                                <td>1,120k</td>
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
                                <td>995k</td>
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
                                <td>1,120k</td>
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
                                <td>870k</td>
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
                                <td>790k</td>
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
                                <td>1,050k</td>
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
                                <td>1,040k</td>
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
                                <td>840k</td>
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
                                <td>920k</td>
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
                                <td>1,040k</td>
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
                                <td>1,020k</td>
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
                                <td>1,040k</td>
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
                                <td>1,080k</td>
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
                                <td>1,150k</td>
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
                                <td>1,120k</td>
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
                                <td>1,100k</td>
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
                                <td>1,340k</td>
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
                                <td>1,750k</td>
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
                                <td>2,000k</td>
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
                                <td>2,100k</td>
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
                                <td>Suite Espranade</td>
                                <td>2,650k</td>
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
                                <td>1,300k</td>
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
                                <td>1,400k</td>
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
                                <td>1,650k</td>
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
                                <td>1,850k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <h2 className="pt-10">{t('content.packageContentTitleExpress')}</h2>
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
                                <td>850k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOMESTAY AC</td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>925k</td>
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
                                <td>960k</td>
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
                                <td>1000k</td>
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
                                <td>1,050k</td>
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
                                <td>990k</td>
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
                                <td>1,020k</td>
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
                                <td>1,030k</td>
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
                                <td>1000k</td>
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
                                <td>960k</td>
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
                                <td>1,150k</td>
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
                                <td>1,240k</td>
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
                                <td>1,320k</td>
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
                                <td>1,250k</td>
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
                                <td>1,320k</td>
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
                                <td>1,070k</td>
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
                                <td>990k</td>
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
                                <td>1,250k</td>
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
                                <td>1,240k</td>
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
                                <td>1,040k</td>
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
                                <td>1,120k</td>
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
                                <td>1,240k</td>
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
                                <td>1,220k</td>
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
                                <td>1,270k</td>
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
                                <td>1,300k</td>
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
                                <td>1,350k</td>
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
                                <td>1,320k</td>
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
                                <td>1,300k</td>
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
                                <td>1,580k</td>
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
                                <td>1,950k</td>
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
                                <td>2,200k</td>
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
                                <td>2,300k</td>
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
                                <td>3,000k</td>
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
                                <td>2,800k</td>
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
                                <td>1,500k</td>
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
                                <td>1,600k</td>
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
                                <td>1,850k</td>
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
                                <td>2,050k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <h2 className="mt-10">{t('content.packageHeaderContentFacility')}</h2>
                    <p>* {t('content.packageContentFasility1')}
                        <br />
                        * {t('content.packageContentFasility2')}
                        <br />
                        * {t('content.packageContentFasility3')}
                        <br />
                        * {t('content.packageContentFasility4')}
                        <br />
                        * {t('content.packageContentFasility5')}
                        <br />
                        * {t('content.packageContentFasility6')}
                        <br />
                        * {t('content.packageContentFasility7')}
                        <br />
                        * {t('content.packageContentFasility8')}
                        <br />
                        * {t('content.packageContentFasility9')}
                        <br />
                        * {t('content.packageContentFasility10')}
                        <br />
                        * {t('content.packageContentFasility11')}
                        <br />
                        * {t('content.packageContentFasility12')}
                        <br />
                        * {t('content.packageContentFasility13')}
                        <br />
                        * {t('content.packageContentFasility14')}
                        <br />
                        * {t('content.packageContentFasility15')}
                    </p>
                    <h4>{t('content.packageContentTitleNonFasility')}</h4>
                    <p>
                        * {t('content.packageContentNonFasility1')}
                        <br />
                        * {t('content.packageContentNonFasility2')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Paket2D1N;