import Heroes from "../../components/Heroes"
import Page2 from "../../components/Page2"
import Page3 from "../../components/Activities"
import Testimonials from "../../components/Testimonials"
import Paket from "../../components/PaketKarimunjawa"
import Galery from "../../components/Page6"
import ReasontoOrder from "../../components/ReasonToOrder"

const Home = () => {
    return (
        <div>
            <Heroes />
            <Page2 />
            <Page3 />
            <Paket />
            <ReasontoOrder />
            <Testimonials />
            <Galery />
        </div>
    )
}
export default Home;