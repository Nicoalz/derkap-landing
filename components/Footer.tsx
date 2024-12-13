import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[100dvh] w-full bg-purple" id="contact">
      <div className="max- h-full p-1 flex flex-col justify-between">
      <div></div>
      <Image src="/images/derkap.svg" width={600} height={200} alt="Derkap" className="w-full"/>
    </div>
    </div>
  );
}