import type { CoffeeProps } from '../types.ts';
import starFill from '../images/Star_fill.svg';
import star from '../images/Star.svg';

export function Card(coffee: CoffeeProps) {
  const { image, name, popular, price, rating, votes, available } = coffee;

  return (
    <div>
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="rounded-lg"
        />
        {popular ? <div className="absolute top-[5%] left-[3%] bg-yellow-tag text-small-text font-semibold px-3 py-0.5 rounded-xl">Popular</div> : null}
      </div>
      <div className="flex flex-row justify-between items-center pt-2">
        <p className="text-text-primary text-body font-semibold">{name}</p>
        <div className="bg-green-tag px-2 py-0.5 rounded-md text-price-tag text-background-primary font-semibold">{price}</div>
      </div>
      <div className="flex justify-between gap-1 pt-2">
        <div className="flex flex-row items-center gap-0.5">
          {votes > 0 ? (
            <>
              <img
                src={starFill}
                alt="star fill"
              />
              <div className="flex items-center gap-1">
                <p className="text-text-primary text-label">{rating}</p>
                <p className="text-text-secondary text-price-tag font-semibold">({votes} votes)</p>
              </div>
            </>
          ) : (
            <>
              <img
                src={star}
                alt="Star"
              />
              <p className="text-text-secondary text-label font-semibold">No ratings</p>
            </>
          )}
        </div>
        {!available && <p className="text-sold-out text-label font-semibold">Sold out</p>}
      </div>
    </div>
  );
}
