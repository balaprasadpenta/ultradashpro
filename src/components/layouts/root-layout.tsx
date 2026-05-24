import {Outlet} from "react-router-dom"
import { Suspense } from "react"


const RootLayout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
    </div>
  )
}

export default RootLayout