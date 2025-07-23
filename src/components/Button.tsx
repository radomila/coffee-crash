interface Props {
  title: string;
}

export function Button({ title }: Props) {
  return <button className="text-text-primary bg-button text-label px-3 py-1.5 rounded-lg font-semibold cursor-pointer">{title}</button>;
}
