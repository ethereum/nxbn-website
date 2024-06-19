import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Flex,
  Menu,
  MenuButton,
  useDisclosure,
} from "@chakra-ui/react"
import { useRouter } from "next/router"

import { CloseIcon, HamburgerIcon, LogoIcon } from "@/components/icons"
import HeaderButtons from "@/components/Nav/Header/HeaderButtons"

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const bgColor = isOpen ? "transparent" : "rgba(0, 0, 0, 0.60)"

  return (
    <header>
      <Box mx={4} zIndex="sticky">
        <Flex
          px={6}
          py={3}
          h={16}
          alignItems={{ base: "center", md: "normal" }}
          justifyContent="space-between"
          width="100%"
          borderRadius="60px"
          transition="transform 12s ease"
          bg={bgColor}
        >
          <Box
            onClick={isOpen ? undefined : () => router.push("/")}
            cursor={isOpen ? "default" : "pointer"}
          >
            <LogoIcon />
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <Box>
              <Menu id="menu-button">
                {!isOpen && (
                  <MenuButton
                    as={IconButton}
                    aria-label="Menu"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                  />
                )}

                {isOpen && (
                  <MenuButton
                    as={IconButton}
                    aria-label="Close menu"
                    icon={<CloseIcon />}
                    onClick={onClose}
                  />
                )}
              </Menu>
            </Box>

            <Drawer
              onClose={onClose}
              isOpen={isOpen}
              size="full"
              placement="start"
            >
              <DrawerOverlay />
              <DrawerContent bg={"actionHighlight"} px={5} zIndex="sticky">
                <DrawerBody>
                  <HeaderButtons onClose={onClose} />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          <Center display={{ base: "none", md: "flex" }}>
            <HeaderButtons onClose={onClose} />
          </Center>
        </Flex>
      </Box>
    </header>
  )
}

export default Header
