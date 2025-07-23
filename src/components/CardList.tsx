import { useCoffeeData } from '../hooks/useCoffeeData.ts';
import type { CoffeeProps } from '../types.ts';
import { Card } from './Card.tsx';
import { useActiveButton } from '../hooks/useActiveButton.ts';

export function CardList() {
  const { coffeeData } = useCoffeeData();
  const { activeButton } = useActiveButton();

  const coffeeDataType = activeButton === 'available' ? coffeeData?.filter((coffee: CoffeeProps) => coffee.available) : coffeeData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-7">
      {coffeeDataType && coffeeDataType.length > 0
        ? coffeeDataType?.map((coffee: CoffeeProps) => {
            return (
              <Card
                key={coffee.id}
                {...coffee}
              />
            );
          })
        : null}
    </div>
  );
}
