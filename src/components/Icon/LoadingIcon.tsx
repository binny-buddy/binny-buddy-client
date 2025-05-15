import loading1 from '@/assets/icons/loading1.svg';
import loading2 from '@/assets/icons/loading2.svg';
import loading3 from '@/assets/icons/loading3.svg';
import loading4 from '@/assets/icons/loading4.svg';
import loading5 from '@/assets/icons/loading5.svg';
import loading6 from '@/assets/icons/loading6.svg';
import loading7 from '@/assets/icons/loading7.svg';
import loading8 from '@/assets/icons/loading8.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SVG_LIST = [
  loading1,
  loading2,
  loading3,
  loading4,
  loading5,
  loading6,
  loading7,
  loading8,
];

function LoadingIcon() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SVG_LIST.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-40" />
      <div className="absolute absolute-center top-1/2 text-white z-50 w-[77px] flex flex-col gap-1 justify-center">
        <Image
          key={index}
          src={SVG_LIST[index]}
          alt={`loading`}
          className="w-full h-full object-contain"
        />
        Loading...
      </div>
    </>
  );
}

export default LoadingIcon;
