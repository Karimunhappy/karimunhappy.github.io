import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Camping from '../../../assets/images/camping.png'


const Paket4D3N = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="bg-white py-44 flex flex-col items-center">
            <div className="w-screen h-[600px] -mt-44"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Camping})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 0%',
                }}
            ></div>
            <h1 className="-mt-96 text-white text-5xl text-center">{t('content.packageTitle4D3N')}</h1>
            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            <h3 className="text-center px-10 md:px-28 py-12 text-white">{t('content.packageSubtitle4D3N')}</h3>
            <div className="shadow-lg p-1 md:p-5 bg-white rounded-lg w-screen">
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
                                <td>1,220k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOMESTAY AC</td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,460k</td>
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
                                <td>1,620k</td>
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
                                <td>1,670k</td>
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
                                <td>1,690k</td>
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
                                <td>1,650k</td>
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
                                <td>1,850k</td>
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
                                <td>1,650k</td>
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
                                <td>1,620k</td>
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
                                <td>1,620k</td>
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
                                <td>2,050k</td>
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
                                <td>2,100k</td>
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
                                <td>2,700k</td>
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
                                <td>2,145k</td>
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
                                <td>2,750k</td>
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
                                <td>1,995k</td>
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
                                <td>1,770k</td>
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
                                <td>2,295k</td>
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
                                <td>2,520k</td>
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
                                <td>1,920k</td>
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
                                <td>2,150k</td>
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
                                <td>2,520k</td>
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
                                <td>2,450k</td>
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
                                <td>2,520k</td>
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
                                <td>2,750k</td>
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
                                <td>2,970k</td>
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
                                <td>2,950k</td>
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
                                <td>2,930k</td>
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
                                <td>3,420k</td>
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
                                <td>3,600k</td>
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
                                <td>Studio Sea Front</td>
                                <td>4,300k</td>
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
                                <td>4,950k</td>
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
                                <td>4,800k</td>
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
                                <td>Deluxe Garden</td>
                                <td>3,150k</td>
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
                                <td>3,500k</td>
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
                                <td>3,950k</td>
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
                                <td>1,420k</td>
                                <td>
                                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>HOMESTAY AC</td>
                                <td>Full AC, {t('content.packageContentEnsuiteBathroom')}</td>
                                <td>1,650k</td>
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
                                <td>1,820k</td>
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
                                <td>1,870k</td>
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
                                <td>1,890k</td>
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
                                <td>1,850k</td>
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
                                <td>2,050k</td>
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
                                <td>1,890k</td>
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
                                <td>1,850k</td>
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
                                <td>1,720k</td>
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
                                <td>2,250k</td>
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
                                <td>2,400k</td>
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
                                <td>2,850k</td>
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
                                <td>2,345k</td>
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
                                <td>2,900k</td>
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
                                <td>2,195k</td>
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
                                <td>1,970k</td>
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
                                <td>2,495k</td>
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
                                <td>2,770k</td>
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
                                <td>2,120k</td>
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
                                <td>2,350k</td>
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
                                <td>2,720k</td>
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
                                <td>2,650k</td>
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
                                <td>2,720k</td>
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
                                <td>2,950k</td>
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
                                <td>3,170k</td>
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
                                <td>3,150k</td>
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
                                <td>3,130k</td>
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
                                <td>3,620k</td>
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
                                <td>3,800k</td>
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
                                <td>4,300k</td>
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
                                <td>4,500k</td>
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
                                <td>5,150k</td>
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
                                <td>5,000k</td>
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
                                <td>2,950k</td>
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
                                <td>3,350k</td>
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
                                <td>3,700k</td>
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
                                <td>4,150k</td>
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

export default Paket4D3N;