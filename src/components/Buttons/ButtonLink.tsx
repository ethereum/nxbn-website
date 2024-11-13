import Link from "@/components/Link"

const ButtonLink = ({
  isSecondary = false,
  href,
  children,
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary: {
      bg: "action",
    },
    disabled: {
      bg: "action",
      opacity: 0.4,
    },
    secondary: {
      bg: "white",
    },
  }

  return (
    <Link
      href={href}
      bg={isSecondary ? "body" : "action"}
      px={10}
      py={2}
      borderRadius="full"
      textStyle="button-link"
      textAlign="center"
      marginRight="10px"
      marginBottom="10px"
      sx={{ ...variants[variant] }}
      _hover={{
        opacity: 0.8,
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
