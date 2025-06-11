import React from 'react'
import SideNavbar from '../Components/SideNavbar'
import Main from '../Components/Main'

function Home({ sideNavbar }) {
  return (
    <div className="flex w-full px-4 mt-2">
      <SideNavbar isOpen={sideNavbar} />
      <Main />
    </div>
  );
}

export default Home
