import type { NextPage } from 'next'
import Login  from './login'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gradient-to-r from-[#141e30] to-[#243b55]">
      <Login />
    </div>
  )
}

export default Home
