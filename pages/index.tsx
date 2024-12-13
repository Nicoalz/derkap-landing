import dynamic from 'next/dynamic';
import Lines from '@/components/Lines';
import Onboarding from '@/components/Onboarding';
import Hero from '@/components/Hero';

const AnimatedText = dynamic(() => import('@/components/AnimatedText'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Lines
        textOne='Relève les Défis • DERKAP •'
        textTwo='Relève les Défis • DERKAP •'
        black
      />
      <Onboarding />
      <Lines
        textOne='Relève les Défis • DERKAP •'
        textTwo='Relève les Défis • DERKAP •'
        purple
      />
      <div className='section-container max-w-screen-2xl mx-auto h-screen flex items-center justify-center overflow-hidden'>
        <AnimatedText
          className='section-text text-center text-pretty w-3/4 text-2xl leading-10'
          text="Prêt pour un <span className='text-purple'>défi</span>? Avec <span className='text-purple'>Derkap</span>, c'est <span className='text-purple'>fun</span> et <span className='text-purple'>intéractif</span>. Défie tes amis et partage des moments <span className='text-purple'>inoubliables</span>!"
          isScrollTriggered={true}
        />
      </div>
    </div>
  );
}
