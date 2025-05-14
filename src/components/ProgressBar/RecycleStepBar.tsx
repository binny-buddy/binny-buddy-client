interface Props {
  step: 'Photo' | 'Guide' | 'Reward';
}

const isNotCurrent = 'w-[10px] h-[10px] bg-gray-200 rounded-full';
const isCurrent = 'w-5 h-5 bg-main-400 rounded-full';

function RecycleStepBar({ step }: Props) {
  return (
    <div className="w-[213px] relative">
      <hr className="border-gray-200 w-[171px] absolute left-1/2 -translate-x-1/2" />
      {/* Photo */}
      <div
        className={`absolute left-0 flex flex-col items-center ${
          step === 'Photo' ? '-top-[9px]' : '-top-1 gap-1'
        }`}
      >
        <div className={step === 'Photo' ? isCurrent : isNotCurrent} />
        <p
          className={`text-S ${
            step === 'Photo' ? 'text-main-400' : 'text-gray-200'
          }`}
        >
          Photo
        </p>
      </div>

      {/* Guide */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center ${
          step === 'Guide' ? '-top-[9px]' : '-top-1 gap-1'
        }`}
      >
        <div className={step === 'Guide' ? isCurrent : isNotCurrent} />
        <p
          className={`text-S ${
            step === 'Guide' ? 'text-main-400' : 'text-gray-200'
          }`}
        >
          Guide
        </p>
      </div>

      {/* Reward */}
      <div
        className={`absolute right-0 flex flex-col items-center ${
          step === 'Reward' ? '-top-[9px]' : '-top-1 gap-1'
        }`}
      >
        <div className={step === 'Reward' ? isCurrent : isNotCurrent} />
        <p
          className={`text-S ${
            step === 'Reward' ? 'text-main-400' : 'text-gray-200'
          }`}
        >
          Reward
        </p>
      </div>
    </div>
  );
}

export default RecycleStepBar;
