import Navbar from "../components/Navbar/Navbar"
import HowItWorksSection from "../components/HowItWorksSection/HowItWorksSection"
import HeroSection from "../components/HeroSection/HeroSection"
import Footer from "../components/Footer/Footer"
import DashboardPreview from "../components/DashboardPreview/DashboardPreview"
import FeaturesSection from "../components/FeaturesSection/FeaturesSection"
import CTASection from "../components/CTASection/CTASection"

function LandingPage(){
    return(
        <div>
            <Navbar/>
            <main>
                <HeroSection/><br/>
                <DashboardPreview/><br/>
                <FeaturesSection/><br/>
                <HowItWorksSection/><br/>
                <CTASection/>
            </main>
            <Footer/>
        </div>
    )
}

export default LandingPage