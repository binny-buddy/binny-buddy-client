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
    <div className="pt-[72px] px-4 relative">
      <Header curPath={path} />
      <section>{children}</section>
      <TabBar curPath={path} />
    </div>
  );
}
