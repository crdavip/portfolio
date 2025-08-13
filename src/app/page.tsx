import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto h-fit grid grid-cols-1 md:grid-cols-2 gap-10 mt-[80px] sm:mt-0">
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl text-center md:text-left">Hola, mi nombre es</h2>
        <h1 className="text-4xl font-bold text-center md:text-left">Cristian David</h1>
        <h3 className="text-xl text-center md:text-left">soy <span className="primary-color">Diseñador y Desarrollador</span></h3>
      </div>
      <div className="flex flex-col items-end">
        <Image src="/img/slide-img.svg" alt="Slide Image" width={508} height={ 508} priority />
      </div>
    </div>
  );
}
