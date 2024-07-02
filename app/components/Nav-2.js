import ActiveLink from './ActiveLink'
import Link from 'next/link'
import Button from './Button'
const Nav = () => (
  <nav className="bg-white">
    <style jsx>{`
      .nav-link {
        text-decoration: none;
      }
      .active:after {
        content: ' (current page)';
      }
    `}</style>
    <div className="container mx-auto flex justify-between p-3 flex-col md:flex-row items-center">
            <div className="flex justify-start items-center">
              <Link href="/"  className="flex mr-4 title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img className="h-10"
              src="/Logo-Test.png"
              />
            </Link>
            <div className="md:ml-auto md:mr-auto flex flex-wrap items-start text-base justify-center">
              <ActiveLink href="/" className="mr-5">Home</ActiveLink>
              <ActiveLink href="/about" >About</ActiveLink>
            </div>
            </div>
            <Button className='rounded-md text-white font-medium flex py-2.5 px-5.5 bg-black hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-200' onClick={() => {alert("test");}}>Click Me</Button>
            {/* <button className="inline-flex items-center bg-yellow-500 border-0 rounded-md py-1 px-3 mt-4 md:mt-0"></button> */}
          </div>
  </nav>
)

export default Nav