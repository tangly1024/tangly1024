import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";

const Index = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        {/* <WorkingSection /> */}
        {/* <TeamSection /> */}
        {/* <ContactSection /> */}
      </main>
      <DefaultFooter />
    </>
  );
};
export default Index;
