import BottomButton from '@/components/Button/BottomButton';
import SecondHeader from '@/components/Header/SecondHeader';

export default function RecycleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-[104px] px-4">
      <SecondHeader>Guide</SecondHeader>
      <>{children}</>
      <BottomButton />
    </div>
  );
}
