import ActiveLink from './ActiveLink'
import Link from 'next/link'
const Nav = () => (
  <nav className="bg-gradient-to-r from-indigo-400 to-cyan-400">
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
            
            <button className="inline-flex items-center bg-yellow-500 border-0 rounded-md py-1 px-3 mt-4 md:mt-0">Click Me</button>
          </div>
  </nav>
)

export default Nav