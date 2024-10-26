import MainNav from '@/components/main-nav';
import SiteFooter from '@/components/site-footer';
import { buttonVariants } from '@/components/ui/button';
import { marketingConfig } from '@/config/marketing';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className='container md:pl-20 pl-6 z-40 bg-background'>
        <div className='h-20 py-6 flex items-center justify-between'>
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href={'/login'}
              className={cn(
                buttonVariants({ size: 'sm', variant: 'secondary' }),
                'px-4'
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main className='flex flex-col items-center'>{children}</main>
      <SiteFooter></SiteFooter>
    </div>
  );
}
