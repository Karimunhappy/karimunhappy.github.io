import Logo from '../../assets/images/pulau-karimun.jpg'

const About = () => {
    return (
        <div className="bg-white px-20 -mb-4">
            <h2 className="md:text-4xl font-Montserrat">
                About Karimunjawa
            </h2>
            <div className="bg-green-500 h-[3px] w-32 my-3"></div>
            <img src={Logo} alt="" className='w-screen my-12' />
            <p className="text-base font-Poppins leading-relaxed text-gray-500 pb-16">
                Kepulauan Karimunjawa, juga dikenal sebagai Kepulauan Karimunjava (Indonesia: Kepulauan Karimunjawa),
                adalah sebuah kepulauan yang terdiri dari 27 pulau yang terletak di Laut Jawa, Indonesia, sekitar 80
                kilometer di barat laut Jepara. Kepulauan ini memiliki luas daratan sebesar 78 kilometer persegi.
                Pulau terbesar adalah Karimun, dengan luas 2.700 hektar, diikuti oleh pulau terbesar kedua, Kemujan,
                yang memiliki luas 1.400 hektar.<br /><br />

                Pada tahun 2011, kelompok pulau ini memiliki populasi sekitar 9.000 penduduk yang tinggal di lima pulau.
                Mayoritas penduduknya adalah orang Jawa, dengan komunitas kecil orang Bugis dan Madura. Budaya Jawa
                mendominasi di pulau-pulau ini, yang unik karena menjadi satu-satunya kepulauan di luar Jawa di mana
                bahasa Jawa digunakan sebagai bahasa sehari-hari.<br /><br />

                Pada tahun 2001, dua puluh dua dari pulau-pulau tersebut ditetapkan sebagai cagar alam laut, yang dikenal
                sebagai Taman Nasional Karimunjawa. Lima pulau lainnya dimiliki secara pribadi atau dikelola oleh Angkatan
                Laut Indonesia.<br /><br />

                Kepulauan ini dapat diakses melalui Bandara Dewadaru, yang menawarkan penerbangan terjadwal ke Semarang dan Surabaya.
            </p>
        </div>
    )
}

export default About;