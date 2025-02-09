export type UserContextType = {
  user: string;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PizzaOption = {
  isAvailable: boolean;
  name: string;
  price: number;
  imgSrc: string;
  _id: string;
};

type PizzaToppingType = {
  category: string;
  data: [PizzaOption];
};

export type PizzaOptionByCategory = {
  toppings: [PizzaToppingType];
  crust: [PizzaOption];
  size: [PizzaOption];
};
