export type FeaturedSuperstar = {
  id: string;
  name: string;
  nickname?: string;
  brand?: string;
  description?: string;
  image?: string;
};

const featuredSuperstar: FeaturedSuperstar = {
  id: "roddy-rice",
  name: "Roddy Rice",
  nickname: "The Darkness",
  brand: "Showdown",
  description:
    "Roddy Rice continues to rise as one of the most dangerous names in WCPW, bringing intensity, presence, and chaos every time he steps into the spotlight.",
  image: "/featured-roddy.png",
};

export default featuredSuperstar;