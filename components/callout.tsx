import { ReactNode } from 'react';

export default function Callout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className='my-6 flex items-center rounded-md border border-l-4'>
      <div>{children}</div>
    </div>
  );
}
