import BottomButton from '@/components/Button/BottomButton';
import SecondHeader from '@/components/Header/SecondHeader';
import RecycleStepBar from '@/components/ProgressBar/RecycleStepBar';
import { headers } from 'next/headers';

const RECYCLE_STEP = {
  '/camera': 'Photo',
  '/guide': 'Guide',
  '/result': 'Reward',
};

export default async function RecycleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = await headers();
  const path = (header.get('x-pathname') || '') as
    | '/guide'
    | '/result/gain'
    | '/result/newbinny'
    | '/camera';

  return (
    <div className="pt-[104px] px-4">
      <SecondHeader>
        <RecycleStepBar
          step={
            RECYCLE_STEP[
              (path.startsWith('/result') ? '/result' : path) as
                | '/camera'
                | '/guide'
                | '/result'
            ] as 'Photo' | 'Guide' | 'Reward'
          }
        />
      </SecondHeader>
      <>{children}</>
      {path !== '/camera' && <BottomButton path={path} />}
    </div>
  );
}
