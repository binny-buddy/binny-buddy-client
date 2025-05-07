import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4">
      <Header />
      <section>{children}</section>
      <TabBar />
    </div>
  );
}
