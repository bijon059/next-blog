import { useRouter,usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const pathname = usePathname()
  const className =
  pathname === props.href || pathname === props.as
      ? 'active'
      : '';
  return (
    <Link {...props} className={props.className+' '+className} >
      {children}
    </Link>
  )
}
export default ActiveLink