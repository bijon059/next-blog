import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ children, ...props }) => {
  const pathname = usePathname()
  const propsClass = props.className!=undefined?props.className:'';
  const className = 
      pathname === props.href || pathname === props.as
      ? propsClass+' '+'active'
      : propsClass;
  return (
    <Link {...props} className={className} >
      {children}
    </Link>
  )
}
export default ActiveLink