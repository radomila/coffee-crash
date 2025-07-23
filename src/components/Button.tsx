interface Props {
  title: string;
  onClick?: () => void;
}

export function Button({ title, onClick }: Props) {
  return (
    <button
      className="text-text-primary bg-button text-label px-3 py-1.5 rounded-lg font-semibold cursor-pointer"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
