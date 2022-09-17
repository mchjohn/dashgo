import Link , { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement , ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children : ReactElement
  shouldMatchExactHref?: boolean
}

export const ActiveLink = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  const startsWithHref = asPath.startsWith(String(rest.href));
  const startsWithAs = asPath.startsWith(String(rest.as));

  if (!shouldMatchExactHref && startsWithHref || startsWithAs) {
    isActive = true
  }
  
  return (
    <Link {...rest}>
      {
        cloneElement(
          children,
          {
            color: isActive ? 'pink.400' : 'gray.50'
          }
        )
      }
    </Link>
  )
}