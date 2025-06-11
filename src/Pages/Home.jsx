import React from 'react'
import SideNavbar from '../Components/SideNavbar'
import Main from '../Components/Main'

function Home({ sideNavbar }) {
  return (
    <div className="flex w-full  mt-2 ">
      <SideNavbar isOpen={sideNavbar} />
      <Main fullNav={sideNavbar} />
    </div>
  );
}

export default Home
