// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='sticky top-0 z-30 w-full flex items-center px-4 sm:px-8 xl:px-0 py-4 bg-transparent bg-opacity-80 backdrop-blur-md'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-4'>
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={'/hort.svg'}
              width={250}
              height={70}
              alt='Hort Logo'
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};



export default Header;
