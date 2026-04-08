import Image from "next/image";


import iconsImage from '../../../public/images/Frame 2043683613.svg';
import iconsImageMobile from '../../../public/images/1212.png';

const Connect = () => {
  return (
    <section className="w-full bg-linear-to-b  py-5 sm:py-15 md:py-15 lg:py-28 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 transition-all duration-300">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center transition-all duration-300">
          <div className="mb-3 sm:mb-4 md:mb-5 flex justify-center transition-all duration-300">
            <Image
              src={iconsImage}
              alt="Flowchart"
              width={300}
              height={200}
              className="hidden h-auto w-[180px] sm:w-[260px] md:w-[280px] lg:block lg:w-[320px] max-w-full transition-all duration-300"
            />
            <Image
              src={iconsImage}
              alt="Flowchart"
              width={220}
              height={160}
              className="h-auto w-[250px] sm:w-[220px] lg:hidden max-w-full transition-all duration-300"
            />
          </div>

          <h2 className="mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black transition-all duration-300">
            Connect, Qualify, and Book
          </h2>

          <p className="mx-auto max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-800 transition-all duration-300">
            Scale lead-to-sale appointments so your team never leaves revenue on the table.
            Reps spend less time dialing and more time closing deals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;