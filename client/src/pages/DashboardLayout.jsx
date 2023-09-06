/* eslint-disable react-refresh/only-export-components */
import { Outlet } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';

import { useState, createContext, useContext } from 'react';
const DashboardContext = createContext();
// eslint-disable-next-line react/prop-types
const Dashboard = ({ isDarkThemeEnabled }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);


  
  // temp
  const user = { name: 'john' };

  const [showSidebar, setShowSidebar] = useState(false);
  // eslint-disable-next-line no-unused-vars
  

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;