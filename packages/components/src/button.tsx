interface Props {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return <button className="bg-red-900">{children}</button>;
}
