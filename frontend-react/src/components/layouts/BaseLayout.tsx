import React from 'react';
import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx'


const BaseLayout =({children}) =>{
  return(
    <>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default BaseLayout;