import type { NextPage } from 'next'
import Login  from './login'
import Header  from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#00aad4ff]'>
      <Header />
      <div className="flex w-full h-[90vh] justify-center items-center">
        <Login />
      </div>
    </div>
  )
}

export default Home
