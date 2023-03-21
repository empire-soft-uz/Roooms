'use client'

import Script from "next/script"
import React from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./components/Banner/banner"
import Category from "./components/Category/category"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import Items from "./components/Items/items";

const Home = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div style={{ width: "100vw" }}>
        <Header logoLink="#" contactLink="#contact" />
        <div style={{ marginTop: "10vh" }}>
          <Banner />
          <Category />
          <Items />
          <Contact />
          <Footer />
        </div>
      </div>
      {/* <Script
        id="yandexx"
        src='./script.js'
        strategy="lazyOnload"
      /> */}
    </>
  )
}

export default Home
