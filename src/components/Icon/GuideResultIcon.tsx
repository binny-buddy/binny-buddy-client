import SuccessIcon from '@/assets/icons/Icon/check.svg';
import FailIcon from '@/assets/icons/Icon/fail.svg';
import Image from 'next/image';

interface Props {
  isSuccessed?: boolean;
}

function GuideResultIcon({ isSuccessed = false }: Props) {
  return (
    <div
      className={`relative w-9 h-9 rounded-full ${
        isSuccessed ? 'bg-main-400' : 'bg-gray-600'
      }`}
    >
      <Image
        src={isSuccessed ? SuccessIcon : FailIcon}
        alt="result Icon"
        className="absolute-center translate-y-1/2"
      />
    </div>
  );
}

export default GuideResultIcon;
