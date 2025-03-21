import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UserRout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [isAuthenticated, SetIsAuthenticate] = useState<boolean>(true);
  // const isAuthenticated = useSelector((state) => state.auth.isLogin)



  // if (!isAuthenticated) {
  //   return <Navigate to="/" />
  // }

  return (


    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
}
