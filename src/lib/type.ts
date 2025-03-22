export type UserContextType = {
  user: string;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserProfile = {
  user: string;
  name: string
  email: string
  gender : "Male" | "Female"
}

export type PizzaOption = {
  isAvailable: boolean;
  name: string;
  price: number;
  imgSrc?: string;
  _id: string;
};

type PizzaToppingType = {
  category: string;
  data: [PizzaOption];
};

export type PizzaOptionByCategory = {
  toppings: [PizzaToppingType];
  crust: [PizzaOption];
  sauce: [PizzaOption];
  size: [PizzaOption];
};

type PizzaCartTopping = {
  id: string,
  quantity: number
}

export type PizzaCart = {
  id: number;
  title: string;
  crust: string;
  size: string;
  sauce: string;
  toppings: Array<PizzaCartTopping>;
  cheese: string[];
}

export type FormStepsType = "size" | "crust" | "toppings" | "cheese" | "sauce";

