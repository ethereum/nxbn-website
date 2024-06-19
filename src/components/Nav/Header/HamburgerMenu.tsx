import { motion } from "framer-motion"
import { type ButtonProps, Icon, IconButton } from "@chakra-ui/react"

const hamburgerSvg =
  "M 2 13 l 10 0 l 0 0 l 10 0 M 4 19 l 8 0 M 12 19 l 8 0 M 2 25 l 10 0 l 0 0 l 10 0"
const glyphSvg =
  "M 2 19 l 10 -14 l 0 0 l 10 14 M 2 19 l 10 7 M 12 26 l 10 -7 M 2 22 l 10 15 l 0 0 l 10 -15"

const hamburgerVariants = {
  closed: { d: hamburgerSvg, transition: { duration: 0.25 } },
  open: { d: glyphSvg, transition: { duration: 0.25 } },
}

type HamburgerProps = ButtonProps & {
  isMenuOpen: boolean
  onToggle: () => void
}

const HamburgerButton = ({
  isMenuOpen,
  onToggle,
  ...props
}: HamburgerProps) => {
  return (
    <IconButton
      onClick={onToggle}
      aria-label={"test"}
      px={0}
      color="body"
      icon={
        <Icon
          viewBox="0 0 24 40"
          pointerEvents={isMenuOpen ? "none" : "auto"}
          mx={0.5}
          width={6}
          height={10}
          position="relative"
          strokeWidth="2px"
        >
          <motion.path
            variants={hamburgerVariants}
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
          />
        </Icon>
      }
      {...props}
    />
  )
}

export default HamburgerButton
