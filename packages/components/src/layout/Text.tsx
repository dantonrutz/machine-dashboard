interface Props {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
}

export default function Text({ children, tag, className }: Props) {
  const Component = tag;

  const tagStyles: Record<Props["tag"], string> = {
    h1: "text-3xl 768:text-4xl 1024:text-5xl",
    h2: "text-2xl 768:text-3xl 1024:text-4xl",
    h3: "text-xl 768:text-2xl 1024:text-3xl",
    h4: "text-lg 768:text-xl 1024:text-2xl",
    h5: "text-base 768:text-lg 1024:text-xl",
    h6: "text-sm 768:text-base 1024:text-lg",
    p: "text-base",
    span: "text-base",
  };

  return (
    <Component className={`${tagStyles[tag]} ${className || ""}`}>
      {children}
    </Component>
  );
}
