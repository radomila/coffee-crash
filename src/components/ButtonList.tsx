import { Button } from './Button.tsx';
import { useActiveButton } from '../hooks/useActiveButton.ts';

export function ButtonList() {
  const { setActiveButton } = useActiveButton();

  return (
    <div className="flex flex-row flex-wrap gap-3">
      <Button
        title="All Products"
        value="all"
        onClick={() => setActiveButton('all')}
      />
      <Button
        title="Available Now"
        value="available"
        onClick={() => setActiveButton('available')}
      />
    </div>
  );
}
