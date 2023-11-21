export function Test({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <p className={className}>{children} test!</p>;
}
