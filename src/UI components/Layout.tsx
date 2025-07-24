import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen grid place-items-center bg-no-repeat bg-[url(./assets/bg-cafe-sm.jpg)] md:bg-[url(./assets/bg-cafe.jpg)] lg:bg-[url(./assets/bg-cafe-lg.jpg)] bg-position-[center_top]">
      <div className="grid gap-10 bg-background-secondary px-[2rem] lg:px-[4rem] xl:px-[8rem] py-[3rem] lg:py-[6rem] rounded-xl mx-3 my-[5rem] md:my-[10rem] lg:my-[15rem]">{children}</div>
    </div>
  );
}
