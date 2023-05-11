import React from 'react'
import Navbar from '../Navbar'
import Beadcrumb from '../Breadcrumb'

export default function Header() {
  return (
    <nav className="flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start sticky top-[1%] backdrop-saturate-200 backdrop-blur-2xl dark:bg-slate-850/80 dark:shadow-dark-blur bg-[#e0e0e0] shadow-blur z-110">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <Beadcrumb />
        <Navbar />
      </div>
    </nav>
  )
}
