import { useCoffeeData } from '../hooks/useCoffeeData.ts';
import type { CoffeeProps, CoffeeTypeProps } from '../types.ts';
import { CoffeeCard } from './CoffeeCard.tsx';

export function CoffeeList({ coffeeTypeParam }: CoffeeTypeProps) {
  const { coffeeData } = useCoffeeData({ coffeeTypeParam: coffeeTypeParam });

  return (
    <div className="flex justify-center items-start flex-wrap gap-6">
      {coffeeData && coffeeData.length > 0
        ? coffeeData?.map((coffee: CoffeeProps) => {
            return <CoffeeCard {...coffee} />
          })
        : null}
    </div>
  );
}
