export default function banner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="border-b text-center">10% off</div>
      {children}
    </div>
  );
}
