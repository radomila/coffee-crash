import { Button } from './Button.tsx';

export function ButtonList() {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      <Button title="All Products" />
      <Button title="Available Now" />
    </div>
  );
}
