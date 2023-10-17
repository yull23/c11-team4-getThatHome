import Footer from "../ui/Footer";
import Header from "../ui/Header";
import NewPropertyRentalPage from "../ui/Inputs/NewPropertyRentalPage/NewPropertyRentalPage";
import NewPropertySalePage from "../ui/Inputs/NewPropertySalePage/NewPropertySalePage";



function NewPropertyPage() {
  return (
    <>
      <Header />
      <NewPropertyRentalPage />
      <NewPropertySalePage/>
      <Footer />
    </>
  );
}

export default NewPropertyPage;