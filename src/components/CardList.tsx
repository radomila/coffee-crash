import { useCoffeeData } from '../hooks/useCoffeeData.ts';
import type { CoffeeProps } from '../types.ts';
import { Card } from './Card.tsx';

export function CardList() {
  const { coffeeData } = useCoffeeData();

  return (
    <div className="flex flex-wrap gap-7">
      {coffeeData && coffeeData.length > 0
        ? coffeeData?.map((coffee: CoffeeProps) => {
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
