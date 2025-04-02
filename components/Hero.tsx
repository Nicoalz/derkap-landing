import dynamic from 'next/dynamic';
import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Image from 'next/image';

const AnimatedText = dynamic(() => import('./AnimatedText'), {
  ssr: false,
});

export default function Hero() {
  const timelineAnimation = () => {
    const tl = gsap.timeline();

    tl.from('.title-hero', {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power4.out',
    });
    tl.from('.pop-composant', {
      duration: 1,
      scale: 0,
      opacity: 0,
      stagger: 0.05,
      ease: "elastic.out(1,0.75)",
    });
    tl.to('.pop-composant', {
      duration: 2,
      scale: 1.04,
      y: -10,
      stagger: 0.5,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true
    }, '+=.2');

  };

  useGSAP(() => {
    timelineAnimation();
  }, []);

  return (
    <div id='hero' className='max-w-screen-2xl mx-auto h-[100dvh] py-32 flex flex-col items-center justify-center gap-16 md:gap-8 px-2 md:px-4 relative'>

      {/* <div className='pop-composant absolute bottom-4 md:bottom-1/3 -right-20 md:right-[2%] w-96 h-auto z-0' >
        <Group />
      </div>  
      <div className='pop-composant absolute top-[15%] md:top-1/3 -left-20 md:left-[2%] max-w-96 h-auto z-0' >
        <ChallengeBox />
      </div>   */}
      {/* <div className='pop-composant absolute top-[30%] left-[80%] md:left-[45%] max-w-96 h-auto z-0' >
        <Badge status='posting' />
      </div>  
      <div className='pop-composant absolute bottom-[30%] right-[80%] md:right-[45%] max-w-96 h-auto z-0' >
        <Badge status='voting' />
      </div>   */}

      <div className=''>
        <h1 className='title-hero text-7xl md:text-8xl text-purple z-20'>DERKAP</h1>
      </div>

      <AnimatedText
        className='hero-title w-4/5 text-3xl text-center text-pretty'
        text='Tape toi des barres en <span className="text-purple font-bold">défiant</span> tes potes !'
        isScrollTriggered={false}
      />

<Link href='https://apps.apple.com/fr/app/derkap/id6741578374' target='_blank' className='bg-purple text-white px-4 py-2 rounded-md'>
        Télécharger l&apos;application !
      </Link>

      <Image src='/images/leonmarchand.png' alt='imite leon marchand' className='w-60 rounded-xl' width={300} height={300} />
  

    

    </div>
  );
}
