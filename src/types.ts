export interface CoffeeProps {
  id: number;
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
  available: boolean;
}

export type ActiveButtonType = 'all' | 'available';

export interface ActiveButtonContextType {
  activeButton: ActiveButtonType;
  setActiveButton: (button: ActiveButtonType) => void;
}
