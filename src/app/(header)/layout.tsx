import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import { PathType } from '@/types/setting';
import { headers } from 'next/headers';

export default async function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = await headers();
  const path = (header.get('x-pathname') || '') as PathType;

  return (
    <div className="pt-[72px] relative min-h-dvh pb-[124px]">
      <Header curPath={path} />
      <section className="px-4">{children}</section>
      <TabBar curPath={path} />
    </div>
  );
}
