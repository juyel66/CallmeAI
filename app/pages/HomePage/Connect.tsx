import Image from "next/image";

import imageBanner from '../../../public/images/Page 1 (1).svg';
import iconsImage from '../../../public/images/frammmm.svg';
import iconsImageMobile from '../../../public/images/1212.png';

const Connect = () => {
  return (
    <section className="w-full bg-linear-to-b  py-5 sm:py-15 md:py-15 lg:py-28 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 transition-all duration-300">
        
        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-5 items-center justify-items-center">
          
          {/* LEFT CONTENT - Takes 1 column */}
          <div className="text-center transition-all duration-300">
            {/* Icons - Centered */}
            <div className="mb-3 sm:mb-4 md:mb-5 flex justify-center transition-all duration-300">
              <Image 
                src={iconsImage} 
                alt="Flowchart" 
                width={300} 
                height={200} 
                className="h-auto w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] max-w-full transition-all duration-300" 
              />
            </div>

            {/* Heading - Now in one line */}
            <h2 className="mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black whitespace-nowrap transition-all duration-300">
              Connect, Qualify, and Book
            </h2>

            {/* Description */}
            <p className="mx-auto max-w-xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-800 transition-all duration-300">
              Scale lead-to-sale appointments so your team never leaves revenue on the table.
              Reps spend less time dialing and more time closing deals.
            </p>
          </div>

          {/* RIGHT IMAGE - Takes 2 columns */}
          <div className="lg:col-span-2 relative w-full flex justify-center transition-all duration-300">



        <div className="relative hidden w-full h-auto md:h-[430px] lg:block lg:h-[520px] md:max-w-5xl">
  <Image
    src={imageBanner}
    alt="Flowchart"
    className="w-full h-auto object-contain md:object-cover rounded-xl border border-purple-500 shadow-xl"
    priority
  />
</div>


        <div className="relative w-full h-auto lg:hidden md:h-[430px] md:max-w-5xl">
  <Image
    src={iconsImageMobile}
    alt="Flowchart"
    className="w-full h-auto object-contain md:object-cover rounded-xl border border-purple-500 shadow-xl"
    priority
  />
</div>



          </div>

        </div>

      </div>
    </section>
  );
};

export default Connect;