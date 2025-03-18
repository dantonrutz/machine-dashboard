interface Props {
  children: React.ReactNode;
  tag: "article" | "div" | "section" | "footer" | "header";
  className?: string;
}

export default function Container({ children, tag, className }: Props) {
  const Component = tag;
  return (
    <Component
      className={`px-6 440:px-8 640:px-12 880:px-16 1024:px-20 1280:px-36 1536:px-48 1920:px-72 ${className}`}
    >
      {children}
    </Component>
  );
}
