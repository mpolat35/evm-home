import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'


const Layout = ({history, children}) => {

   return (
      <div>
         <Header history={history} />
         <main>
          {children}
         </main>
         <Footer/>
      </div>
   )
}

export default Layout
