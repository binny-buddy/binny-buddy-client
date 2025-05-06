import Header from '@/components/Header';
import TabBarBody from '@/components/TabBar/Body';

export default function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <section>{children}</section>
      <TabBarBody />
    </div>
  );
}
