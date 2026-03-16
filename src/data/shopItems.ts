export type ShopItem = {
  id: string;
  name: string;
  price?: string;
  image?: string;
  link?: string;
  category?: string;
};

const shopItems: ShopItem[] = [
  {
    id: "darkness-shirt",
    name: "Roddy Rice 'The Darkness' Shirt",
    price: "$29.99",
    image: "/shop/darkness-shirt.png",
    link: "#",
    category: "Apparel",
  },
  {
    id: "showdown-poster",
    name: "WCPW Showdown Poster",
    price: "$14.99",
    image: "/shop/showdown-poster.png",
    link: "#",
    category: "Poster",
  },
  {
    id: "wcpw-logo-hat",
    name: "WCPW Logo Hat",
    price: "$24.99",
    image: "/shop/wcpw-logo-hat.png",
    link: "#",
    category: "Accessories",
  },
];

export default shopItems;