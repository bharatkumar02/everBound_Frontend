import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className='mx-auto w-full max-w-[1900px] bg-gray-100/40 pb-12 lg:pb-0'>
      <main className='text-[15px] lg:grid lg:min-h-screen lg:w-full lg:grid-cols-[auto_1fr]'>
        <div className='hidden h-[100vh] border-r border-gray-200 bg-white lg:block sticky top-0 bottom-0 w-[18rem]'>
          <Sidebar />
        </div>

        <div className='w-full'>
          <Header />
          <div className=' px-4 py-3 lg:px-16 lg:py-10'>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
