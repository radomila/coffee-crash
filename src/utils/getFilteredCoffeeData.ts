import type { ActiveButtonType, CoffeeProps } from '../types.ts';

interface Props {
  activeButton: ActiveButtonType;
  coffeeData: CoffeeProps[] | null;
}

export function getFilteredCoffeeData({ activeButton, coffeeData }: Props) {
  return activeButton === 'available' ? coffeeData?.filter((coffee: CoffeeProps) => coffee.available) : coffeeData;
}
