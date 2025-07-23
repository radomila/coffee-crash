import { HeaderText } from './HeaderText.tsx';
import { ButtonList } from './ButtonList.tsx';

export function Header() {
  return (
    <div className="flex flex-col items-center mb-0">
      <HeaderText />
      <ButtonList />
    </div>
  );
}
