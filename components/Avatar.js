import Image from 'next/image';

const Avatar = () => {
  return (
    <div
      className='hidden xl:block fixed w-3/6'  // Use w-1/4 to make the avatar 25% of the viewport width, adjust as needed
      style={{
        left: '45%',
        top: '18%',
      }}
    >
      <Image
        src={'/neonsvg.svg'}
        width={250}
  height={90}
        alt='Avatar'
        className='w-full'  // Ensure image fills the container
      />
    </div>
  );
};



export default Avatar;
