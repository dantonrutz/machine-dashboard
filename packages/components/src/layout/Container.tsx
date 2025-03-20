// Componente genérico que renderiza diferentes elementos de bloco HTML (como "article", "div", "section", etc.)
// A propriedade `removeDefaultPadding` permite remover o padding responsivo padrão, se definida como true
// A propriedade `className` pode ser usada para adicionar estilos personalizados adicionais

interface Props {
  children: React.ReactNode;
  tag: "article" | "div" | "section" | "footer" | "header" | "main";
  className?: string;
  smallPadding?: boolean;
}

export default function Container({
  children,
  tag,
  className,
  smallPadding = false,
}: Props) {
  const Component = tag;

  const paddingClasses = smallPadding
    ? "py-6 px-6 640:py-8 1280:py-10 1280:px-8"
    : "px-4 440:px-6 640:px-12 880:px-16 1024:px-20 1280:px-36 1536:px-48 1920:px-72";

  return (
    <Component className={`${paddingClasses} ${className || ""}`}>
      {children}
    </Component>
  );
}
