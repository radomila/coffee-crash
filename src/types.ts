export interface CoffeeProps {
    title: string;
    description: string;
    image: string;
    id: number;
}

export interface CoffeeTypeProps {
    coffeeTypeParam: 'hot' | 'iced';
}