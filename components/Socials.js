// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiLinkedinBoxFill,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.instagram.com/horizoninteractive'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/horizoninteractive/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/horizon-interactive2023'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
