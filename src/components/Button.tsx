import type { ActiveButtonType } from '../types.ts';
import { useActiveButton } from '../hooks/useActiveButton.ts';
import clsx from 'clsx';

interface Props {
  title: string;
  value?: ActiveButtonType;
  onClick?: () => void;
}

export function Button({ title, value, onClick }: Props) {
  const { activeButton } = useActiveButton();

  const isActive = activeButton === value;

  return (
    <button
      className={clsx('text-text-primary text-label px-3 py-1.5 rounded-lg font-semibold cursor-pointer', isActive ? 'bg-button' : 'bg-transparent')}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
