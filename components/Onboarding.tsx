import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Onboarding() {
  const containerPin = useRef<HTMLDivElement>(null);
  const imgHomeRef = useRef<HTMLImageElement>(null);
  const imgGroupRef = useRef<HTMLImageElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);

  const setupAnimations = () => {
    if (
      !containerPin.current ||
      !imgHomeRef.current ||
      !imgGroupRef.current ||
      !text1Ref.current ||
      !text2Ref.current
    )
      return;

    // Configuration du pin
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerPin.current,
        start: 'top top',
        end: 'bottom +=300vh',
        pin: true,
        scrub: 1,
        snap: {
          snapTo: [0.15, 1],
          delay: 0,
          ease: 'power2.inOut',
          duration: { min: 0.2, max: 1.2 },
        },
      },
    });

    gsap.set(imgGroupRef.current, { autoAlpha: 1, x: '100%' });
    gsap.set(text2Ref.current, { autoAlpha: 0, y: 50 });
    gsap.set(text1Ref.current, { autoAlpha: 1, y: 0 });

    pinTl
      .to(imgGroupRef.current, {
        x: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      })
      .to(
        text1Ref.current,
        {
          autoAlpha: 0,
          y: -50,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<+=0.2'
      )
      .to(
        text2Ref.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<+=0.1'
      );
  };

  useGSAP(() => {
    setupAnimations();
  }, []);

  return (
    <div
      ref={containerPin}
      id='onboarding'
      className='max-w-screen-2xl h-[100dvh] w-full mx-auto mt-16'
    >
      <div className='h-full w-full flex flex-col md:flex-row items-center justify-end md:justify-center gap-12 pb-[10%] md:pb-0'>
        <div className='w-full md:w-1/2 h-[500px] relative'>
          <Image
            src='/images/mockup-iphone.webp'
            alt='Mockup iPhone'
            width={1080}
            height={1920}
            className='w-auto h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 scale-105'
          />
        <div className='mx-auto w-[230px] h-full'>
          <div className='w-full rounded-xl h-full flex relative overflow-hidden'>
            <Image
              ref={imgHomeRef}
              src='/images/home.png'
              alt="Capture d'écran de l'application Derkap"
              width={1170}
              height={2532}
              className='w-full h-auto max-h-full object-contain absolute z-10'
            />
            <Image
              ref={imgGroupRef}
              src='/images/group.png'
              alt="Capture d'écran de l'application Derkap"
              width={1170}
              height={2532}
              className='w-full h-auto max-h-full object-contain absolute z-10'
            />
          </div>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='relative h-[100px] overflow-hidden'>
            <p ref={text1Ref} className='text-xl absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
              Créer un groupe avec tes potes et mets les à l&apos;épreuve grâce à
              DERKAP
            </p>
            <p ref={text2Ref} className='text-xl absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
              Vote pour celui ou celle qui réalisera le DERKAP le plus fou 🤪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
