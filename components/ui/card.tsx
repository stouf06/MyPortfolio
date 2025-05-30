import clsx from "clsx";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("rounded-2xl border bg-white shadow-sm", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="px-6 py-4 border-b">{props.children}</div>;
}
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="text-lg font-semibold">{props.children}</h3>;
}
export function CardDescription(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="text-sm text-gray-500">{props.children}</p>;
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6">{props.children}</div>;
}
