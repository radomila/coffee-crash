import { useCoffeeData } from '../../hooks/useCoffeeData.ts';
import type { CoffeeProps } from '../../types.ts';
import { Card } from './Card.tsx';
import { useActiveButton } from '../../hooks/useActiveButton.ts';
import { getFilteredCoffeeData } from '../../utils/getFilteredCoffeeData.ts';

export function CardList() {
  const { coffeeData } = useCoffeeData();
  const { activeButton } = useActiveButton();

  const filteredCoffeeData = getFilteredCoffeeData({ activeButton, coffeeData });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-7">
      {filteredCoffeeData && filteredCoffeeData.length > 0
        ? filteredCoffeeData?.map((coffee: CoffeeProps) => {
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
