import { useContext } from "react";
import CategoryList from "../../components/categoryList/CategoryList";
import { ImageSlider } from "../../components/imageSlider/ImageSlider";
import DealOfDay from "../../components/dealOfDay/DealOfDay";

import "../home/homeStyle.css";
export const Home = () => {
  return (
    <div className="home__page">
      <ImageSlider />
      <CategoryList />
      <DealOfDay />
    </div>
  );
};
