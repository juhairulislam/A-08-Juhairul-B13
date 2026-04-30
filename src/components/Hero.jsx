import Image from 'next/image';
import React from 'react';

const HeroPage = () => {
  return (
    <div className='my-4'>

      <Image
      className='w-full'
      alt='Hero Image'
      src='/SunHero.png'
      width={500} 
      height ={500}
      >
        

      </Image>

        
    
    </div>
  );
};

export default HeroPage;