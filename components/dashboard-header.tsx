interface DashBoardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export default function DashboardHeader({
  heading,
  text,
  children,
}: DashBoardHeaderProps) {
  return (
    <div className='flex items-center justify-between px-2'>
      <div>
        <h1 className='font-extrabold text-3xl md:text-4xl'>{heading}</h1>
        {text && <p className='text-lg text-muted-foreground'>{text}</p>}
      </div>
      {children}
    </div>
  );
}
