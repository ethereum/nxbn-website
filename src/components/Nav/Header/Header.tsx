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

  return (
    <header>
      <Box mx={4}>
        <Flex
          px={6}
          py={3}
          h={16}
          bg={"rgba(0, 0, 0, 0.60)"}
          alignItems={{ base: "center", md: "normal" }}
          justifyContent="space-between"
          width="100%"
          borderRadius="60px"
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
              <DrawerContent bg={"actionHighlight"} px={5}>
                <Flex
                  px={6}
                  py={3}
                  h={16}
                  mt={4}
                  alignItems={{ base: "center", md: "normal" }}
                  justifyContent="flex-end"
                  width="100%"
                >
                  <Box>
                    <Menu id="menu-button">
                      <MenuButton
                        as={IconButton}
                        aria-label="Close menu"
                        icon={<CloseIcon />}
                        onClick={onClose}
                      />
                    </Menu>
                  </Box>
                </Flex>
                <DrawerBody>
                  <HeaderButtons />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          <Center display={{ base: "none", md: "flex" }}>
            <HeaderButtons />
          </Center>
        </Flex>
      </Box>
    </header>
  )
}

export default Header
