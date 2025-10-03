import { HeaderMenu } from '@/src/myLib';
import { User } from '@/src/features/shared/services';
import { Footer, ImageHeader } from '@/src/components';
import { cookies } from 'next/headers';
import { UserProvider } from '@/src/features/user/contexts';
import { UserInfo } from '@/src/features/user';

export default async function layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const jwt = cookieStore.get('SESSION')?.value;
  let user: UserInfo | null = null;

  if (jwt) {
    try { user = await User.validate(jwt) }
    catch { user = null }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <UserProvider user={user}>
        <HeaderMenu />
        <ImageHeader />
        <main className="flex flex-col flex-1 h-full">
          {children}
        </main>
        <Footer />
      </UserProvider>
    </div>
  );
}
