import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CorporateHero from "@/components/corporate/CorporateHero";
import CorporateServices from "@/components/corporate/CorporateServices";
import SoftwareShowcase from "@/components/corporate/SoftwareShowcase";
import HostingEmail from "@/components/corporate/HostingEmail";
import Cybersecurity from "@/components/corporate/Cybersecurity";
import CloudInfrastructure from "@/components/corporate/CloudInfrastructure";
import Team from "@/components/corporate/Team";
import CorporateAbout from "@/components/corporate/CorporateAbout";
import Partners from "@/components/corporate/Partners";
import HowWeWork from "@/components/corporate/HowWeWork";
import EducationSection from "@/components/corporate/EducationSection";
import CorporateContact from "@/components/corporate/CorporateContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CorporateHero />
      <EducationSection />
      <CorporateServices />
      <SoftwareShowcase />
      <HostingEmail />
      <Cybersecurity />
      <CloudInfrastructure />
      <Team />
      <CorporateAbout />
      <Partners />
      <HowWeWork />
      <CorporateContact />
      <Footer />
    </div>
  );
};

export default Index;
