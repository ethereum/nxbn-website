import { Box } from "@chakra-ui/react"
import Link from "@/components/Link"

const ButtonLink = ({
  isSecondary = false,
  href,
  children,
  variant = "primary",
  disabled = false,
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

  const sharedStyles = {
    bg: isSecondary ? "body" : "action",
    px: 10,
    py: 2,
    borderRadius: "full",
    textStyle: "button-link",
    textAlign: "center",
    marginRight: "10px",
    marginBottom: "10px",
    ...variants[variant],
  }

  if (disabled) {
    return (
      <Box
        as="span"
        cursor="default"
        sx={sharedStyles}
        {...props}
      >
        {children}
      </Box>
    )
  }

  return (
    <Link
      href={href}
      sx={sharedStyles}
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
