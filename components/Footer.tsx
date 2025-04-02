import Image from "next/image";
import Link from "next/link";


// email to derkap.dev@gmail.com

export default function Footer() {
  return (
    <div className="h-[100dvh] w-full bg-purple" id="contact">
      <div className="max- h-full p-1 flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center gap-2 mt-8 text-white font-bold text-5xl text-center px-4">
        <p>
          Une question ? Besoin d&apos;aide ?
        </p>
        <p className="text-white font-bold text-2xl">
          Envoyez-nous un message à l&apos;adresse suivante :
        </p>
        <a className="text-black underline font-bold text-3xl px-4" href="mailto:derkap.dev@gmail.com">derkap.dev@gmail.com</a>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-8 text-white font-bold text-5xl text-center px-4">
        <Link href='https://apps.apple.com/fr/app/derkap/id6741578374' target='_blank' className='bg-black text-white px-4 py-2 rounded-md'>
          Télécharger l&apos;application !
        </Link>
      </div>
      <Image src="/images/derkap.svg" width={600} height={200} alt="Derkap" className="w-full"/>
    </div>
    </div>
  );
}