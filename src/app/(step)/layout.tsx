import BottomButton from '@/components/Button/BottomButton';

export default function StepLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>헤더</header>
      <>{children}</>
      <BottomButton />
    </div>
  );
}
