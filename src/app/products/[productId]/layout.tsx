
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        {children}
        <h2>Features Products</h2>
      </>

  );
}
