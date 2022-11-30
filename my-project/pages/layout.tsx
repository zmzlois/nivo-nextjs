import React from 'react'

const Layout = ({ children }: any) => {
  return (
    <div className="flex">
      <div className="m-auto flex max-w-screen-xl flex-col px-6"><main>{children}</main></div>
    </div>
  )
}

export default Layout
