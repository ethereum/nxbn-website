import Link from "@/components/Link"

const ButtonLink = ({ isSecondary = false, href, children, ...props }) => {
  return (
    <Link
      href={href}
      bg={isSecondary ? "body" : "action"}
      px={10}
      py={2}
      borderRadius="full"
      textStyle="button-link"
      textAlign="center"
      {...props}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
