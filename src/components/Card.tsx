import type { CoffeeProps } from '../types.ts';

export function Card(coffee: CoffeeProps) {
  const { image, name, popular, price, rating, votes } = coffee;

  return (
    <div>
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="rounded-lg"
        />
        {popular ? <div className="absolute top-0 left-0">Popular</div> : null}
      </div>
      <div className="flex flex-row justify-between items-center pt-2">
        <h5>{name}</h5>
        <p>{price}</p>
      </div>
      <div className="flex gap-1 pt-2">
        {votes > 0 ? (
          <>
            <p>{rating}</p>
            <p>({votes} votes)</p>
          </>
        ) : (
          <p>No votes</p>
        )}
      </div>
    </div>
  );
}
