import type { CoffeeProps } from '../types.ts';

export function CoffeeCard(coffee: CoffeeProps) {
  const { id, image, title, description } = coffee;

  return (
    <div
      key={id}
      className="max-w-3xs"
    >
      <div className="relative w-full max-w-sm group cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-orange-400 opacity-0 rounded-lg group-hover:opacity-60 transition duration-300"/>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 z-1">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
