import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className='md:pl-20'>
      <div className='container py-10'>
        <p className='text-center text-sm md:text-left'>
          Build by {''}
          <Link
            href={siteConfig.links.x}
            className='underline underline-offset-4 font-medium'
          >
            Wataryo
          </Link>
          . Hosted on{' '}
          <Link
            href={'http://vercel.com'}
            className='underline underline-offset-4 font-medium'
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
}
