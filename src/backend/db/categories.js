import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Smart Watch",
    description:
      "Vast selection of components, accessories, adapters, media drives & more from top brands. No Cost EMI Available. Best Deals. Huge Selection.",
    image:
      "https://fscl01.fonpit.de/userfiles/7687254/image/NextPit_2022_Best_Smartwatches.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Digital",
    description:
      "Casual digital watches are designed for casual wear. They are inexpensive, comfortable to wear and come in traditional designs   ",
    image:
      "https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/products/digital/_jcr_content/root/responsivegrid/container/teaser.casiocoreimg.jpeg/1663257374301/gmwb5000-pc-1920x816.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "Analog",
    description:
      " Buy Analogue watches online for men & women in India. Choose from a wide range of brands like Fastrack, Titan, Casio & more ",
    image:
      "https://media.gq.com/photos/642715cec74f024305c7efe5/16:9/pass/wathceslede.jpg",
  },
];
