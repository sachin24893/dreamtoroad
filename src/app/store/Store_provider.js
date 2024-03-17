"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store'

import Main_footer from '../comp/Main_footer'
import { usePathname } from 'next/navigation'

const Store_provider = ({children}) => {
  const pathname=usePathname();
  return (
    <div>
    <Provider store={store}>
   
      {children}
      {pathname==="/book_truck"||pathname==="/login"?null:<Main_footer/>}
      
    </Provider>
      
    </div>
  )
}

export default Store_provider
