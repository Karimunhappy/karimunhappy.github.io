import Lembar from '../../assets/images/walpaper.jpg'

const Page2 = () => {
    return (
        <div className="w-screen flex flex-col lg:flex-row p-9 lg:px-24">
            <div className='lg:w-2/3'>
                <div className='text-4xl'>Pemesanan Perjalanan dan Perjalanan Anda dengan Karimunjawa Fun</div>
                <div className="bg-green-500 h-[3px] w-32 my-3"></div>
                <br />
                <p className='text-lg'>Club hopping? Mal melompat? Naah, itu berita lama. Island hopping adalah
                    kegiatan 'itu' untuk Anda lakukan di pulau. Ada dua puluh tujuh dari mereka,
                    dan semua sedang menunggu Anda pecinta laut berangin yang bersemangat.
                    <br />
                    <br />
                    Kunjungi kepulauan Karimunjawa sekarang, dan saksikan sendiri keindahan kehidupan pulau
                    tropis yang sangat dibanggakan oleh sebagian besar orang Indonesia. Cuacanya hangat,
                    langit cerah, airnya jernih dan pemandangannya mempesona.
                    <br />
                    <br />
                    Bonus dokumentasi pakai drone dji mavic pro,kamera sony A6000,kamera underwater go pro
                    semakin membuat foto dan video anda lebih berkesan dan gak akan bisa move on :)</p>
            </div>
            <div className='lg:ml-10 pt-8'>
                <img src={Lembar} alt="" className="h-96 w-72" />
            </div>
        </div>
    )
}

export default Page2;