import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from './Button';
import { useEffect, useState, useCallback } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

interface AnimationConfig {
  duration: number;
  ease: string;
}

const MENU_ITEMS = [
  { href: '#onboarding', text: 'COMMENT ÇA MARCHE' },
  { href: '#contact', text: 'CONTACT' },
];

const ANIMATION_CONFIG: AnimationConfig = {
  duration: 0.8,
  ease: 'power2.out',
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const tl = gsap.timeline();

  const initialAnimation = useCallback(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        '.header-link',
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: ANIMATION_CONFIG.duration,
          stagger: 0.2,
          ease: ANIMATION_CONFIG.ease,
        }
      )
      .fromTo(
        '.header-btn',
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: ANIMATION_CONFIG.duration,
          ease: 'elastic.out',
        },
        '-=0.6'
      )
      .fromTo(
        '.burger-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: 'power1.out',
        },
        '<'
      );
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      lenis?.stop();
      tl.fromTo(
        '.nav-burger',
        { height: '4rem' },
        {
          height: 'calc(100vh - 2.5rem)',
          duration: ANIMATION_CONFIG.duration,
          ease: 'power2.inOut',
        }
      )
        .fromTo(
          '.menu-container',
          {
            height: 0,
            visibility: 'invisible',
            scale: 0,
          },
          {
            height: 'calc(100% - 10vh)',
            visibility: 'visible',
            scale: 1,
            duration: ANIMATION_CONFIG.duration,
            ease: 'power2.inOut',
          },
          '<'
        )
        .fromTo(
          '.mobile-menu-item',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '>'
        );
    } else {
      lenis?.start();
      tl.fromTo(
        '.mobile-menu-item',
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -20,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
        }
      ).to(
        '.nav-burger',
        {
          height: '4rem',
          duration: 0.6,
          ease: 'power2.inOut',
        },
        '>'
      );
    }
  }, [isOpen, lenis, tl]);

  useGSAP(() => {
    initialAnimation();
  }, [initialAnimation]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderMenuItems = (isMobile = false) => {
    return MENU_ITEMS.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={handleMenuToggle}
        className={`${
          isMobile
            ? 'mobile-menu-item text-2xl text-center text-pretty'
            : 'header-link text-sm'
        } text-black font-inter font-bold inline-block`}
      >
        {item.text}
      </a>
    ));
  };

  return (
    <div className="w-full max-w-screen-2xl container fixed top-5 left-1/2 -translate-x-1/2 px-2 z-50">
      <nav className="nav-burger h-16 w-full px-4 py-2 rounded-xl border-2 border-black bg-white/50 backdrop-blur-md">
        <div className="h-11 flex justify-between items-center">
          <div className="overflow-hidden">
            <a href="#hero" className="header-link text-black inline-block text-xl">
              DERKAP
            </a>
          </div>

          <div className="hidden sm:flex items-center justify-center gap-8 overflow-hidden">
            {renderMenuItems()}
          </div>
          
          <div className="hidden sm:block header-btn">
            <Button />
          </div>

          <button
            className="flex flex-col items-end gap-1 sm:hidden"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {[20, 20, 12].map((width, index) => (
              <div
                key={index}
                className={`burger-line h-[2px] rounded-full bg-black origin-right`}
                style={{ width: `${width}px` }}
              />
            ))}
          </button>
        </div>

        <div className="invisible scale-0 menu-container">
          <div className="h-full w-full flex flex-col items-center justify-center gap-24">
            {renderMenuItems(true)}
            <div className="mobile-menu-item pt-10" onClick={handleMenuToggle}>
              <Button />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}