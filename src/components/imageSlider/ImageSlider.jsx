import { useEffect, useState } from "react";

import "../imageSlider/sliderStyle.css";

import image1 from "../../assets/images/slideShow (1).jpg";
import image4 from "../../assets/images/slideShow (4).jpg";
import image5 from "../../assets/images/slideShow (5).jpg";
import image6 from "../../assets/images/slideShow (6).jpg";
import image7 from "../../assets/images/slideShow (7).jpg";

const images = [image1, image6, image7, image4, image5];

export const ImageSlider = () => {
  const [count, setCount] = useState(0);

  const [image, setImage] = useState(images[count]);

  useEffect(() => {
    setImage(images[count]);
  }, [count]);

  const handleNextButton = () => {
    const totalImage = images.length;
    if (count === totalImage - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const handlePrevButton = () => {
    const totalImage = images.length;
    if (count === 0) {
      setCount(totalImage - 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div onClick={handlePrevButton} className="prev__btn">
        {" "}
        &laquo;
      </div>
      <img className="image" src={image} />
      <div onClick={handleNextButton} className="next__btn">
        {" "}
        &raquo;
      </div>
    </div>
  );
};
