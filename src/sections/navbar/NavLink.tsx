"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
  activeClassName: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  activeClassName,
  onClick,
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} ${pathname === href && activeClassName}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
