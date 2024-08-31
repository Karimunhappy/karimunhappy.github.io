import Heroes from "../../components/Heroes"
import Explore from "../../components/Explore"
import Testimonials from "../../components/Testimonials"
import Paket from "../../components/PaketKarimunjawa"
import Galery from "../../components/Galery"
import Service from "../../components/Service"

const Home = () => {
    return (
        <div>
            <Heroes />
            <Service />
            <Explore />
            <Paket />
            <Testimonials />
            <Galery />
        </div>
    )
}
export default Home;