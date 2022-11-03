import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Welcome from '../components/Welcome';

export default function Home() {
    return(
        <div>
        <TopBar />
        <Navbar />
        <Welcome />
        <Footer />
        </div>
    )
}