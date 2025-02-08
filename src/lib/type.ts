export type UserContextType = {
  user: string;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PizzaOption = {
  isAvailable: string;
  name: string;
  price: number;
};

export type PizzaOptionByCategory = {
  category: string,
  data: [PizzaOption]
}
