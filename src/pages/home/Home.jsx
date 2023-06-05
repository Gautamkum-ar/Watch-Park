import { useContext } from "react";
import CategoryList from "../../components/categoryList/CategoryList";
import { ImageSlider } from "../../components/imageSlider/ImageSlider";
import DealOfDay from "../../components/dealOfDay/DealOfDay";

import "../home/homeStyle.css";
import { Loader } from "../../components/loader/Loader";
import { APIContext } from "../../contexts/APIContext/APIContext";
import { Footer } from "../../components/footer/Footer";
export const Home = () => {
  const { isLoading } = useContext(APIContext);
  console.log(isLoading);
  return (
    <div className="home__page">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ImageSlider />
          <CategoryList />
          <DealOfDay />
        </>
      )}
      <Footer />
    </div>
  );
};
