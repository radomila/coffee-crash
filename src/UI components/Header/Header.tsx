import { HeaderText } from './HeaderText.tsx';
import { ButtonList } from '../Button/ButtonList.tsx';

export function Header() {
  return (
    <div className="flex flex-col items-center mb-0 px-[2rem]">
      <div className="flex flex-col items-center">
        <HeaderText />
        <ButtonList />
      </div>
    </div>
  );
}
