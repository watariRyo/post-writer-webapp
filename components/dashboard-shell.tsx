import { cn } from '@/lib/utils';
import React from 'react';

type DashBoardShellProps = React.HTMLAttributes<HTMLDivElement>;

export default function DashBoardShell({
  children,
  className,
  ...props
}: DashBoardShellProps) {
  return (
    <div className={cn('grid items-center gap-8', className)} {...props}>
      {children}
    </div>
  );
}
