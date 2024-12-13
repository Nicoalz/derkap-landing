import Image from "next/image";

export default function Button() {
  return (
    <div className="relative flex justify-end px-1 cursor-pointer">
      <p className="z-20 text-white uppercase text-2xl sm:text-base">Rejoins-nous</p>
      <Image src="/icons/bg-btn.svg" width={24} height={24} alt="Background Button" className="scale-110 z-10 absolute w-full sm:h-24 object-cover sm:object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </div>
  )
}
