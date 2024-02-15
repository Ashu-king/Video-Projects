import React from "react";
import Image from "next/image";
const Heroes = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center">
          <div className="releative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
            <Image
              src="/documents.png"
              width={600}
              height={300}
              alt="documents"
              className="object-contain dark:hidden"
            />
            <Image
              src="/documents-dark.png"
              width={600}
              height={300}
              alt="documents"
              className="object-contain hidden dark:block"
            />
          </div>
          <div className="releative w-[400px] h-[400px] hidden md:block">
            <Image
              src="/reading.png"
              width={600}
              height={300}
              alt="reading"
              className="object-contain dark:hidden"
            />
            <Image
              src="/reading-dark.png"
              width={600}
              height={300}
              alt="reading"
              className="object-contain hidden dark:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
