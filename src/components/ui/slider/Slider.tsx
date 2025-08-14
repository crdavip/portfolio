import Image from "next/image";

export const Slider = () => {
  return (
    <section className="max-w-6xl mx-auto h-fit grid grid-cols-1 sm:grid-cols-2 gap-15 mt-20 sm:mt-0 px-7">
      <div className="flex flex-col justify-center">
        <h2 className="slide-text">Hola, mi nombre es</h2>
        <h1 className="slide-text">Cristian David</h1>
        <h3 className="slide-text">
          soy <span className="text-primary-color">Diseñador y Desarrollador</span>
        </h3>
        <div className="flex mt-10 gap-5 justify-center sm:justify-start">
          <button className="btn-primary">¿Tienes un proyecto?</button>
          <button className="btn-secondary">Ver proyectos</button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Image src="/img/slide-img.svg" alt="Slide Image" width={508} height={453} priority />
      </div>
    </section>
  );
};
