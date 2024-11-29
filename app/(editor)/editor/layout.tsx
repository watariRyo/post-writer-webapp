export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='container mx-auto grid items-center gap-10 py-8'>
      {children}
    </div>
  );
}
