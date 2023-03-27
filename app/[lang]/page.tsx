import React from 'react'
import App from './app'
 
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: string }
  }) {
      
   return (
     <div>
       <App />
     </div>
   )
 }
 