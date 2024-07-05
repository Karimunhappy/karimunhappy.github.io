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
                The Karimunjawa Islands, also known as the Karimunjava Islands (Indonesian: Kepulauan Karimunjawa),
                are an archipelago comprising 27 islands located in the Java Sea, Indonesia, about 80 kilometers
                northwest of Jepara. The islands collectively cover a land area of 78 square kilometers. The
                largest island is Karimun, with an area of 2,700 hectares, followed by the second-largest island,
                Kemujan, which spans 1,400 hectares.<br /><br />

                As of 2011, the island group had a population of around 9,000 inhabitants residing on five of the islands.
                The majority of the population is Javanese, with smaller communities of Bugis and Madurese people. Javanese
                culture predominates on the islands, which are unique in being the only islands off Java where Javanese
                serves as the common language.<br /><br />

                In 2001, twenty-two of the islands were designated as a marine reserve, known as the Karimunjawa
                National Park. The remaining five islands are either privately owned or managed by the Indonesian Navy.<br /><br />

                The archipelago is accessible via Dewadaru Airport, which offers scheduled flights to Semarang and Surabaya.
            </p>
        </div>
    )
}

export default About;