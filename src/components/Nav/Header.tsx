import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Flex,
  Menu,
  MenuButton,
  Text,
  useDisclosure
} from "@chakra-ui/react"
import { useRouter } from "next/router"

import { CloseIcon, HamburgerIcon, LogoIcon } from "@/components/icons"
import HeaderButtons from "@/components/Nav/HeaderButtons"
import Link from '@/components/Link'

import {
  ABOUT_PAGE,
  BLOG_PAGE,
  FELLOWSHIP_PAGE,
  SCHOLAR_PAGE
} from '@/utils/constants'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  return (
    <header>
      <Flex
        px={{ base: 5, md: 16}}
        py={5}
        h={20}
        mt={4}
        bg={"rgba(0, 0, 0, 0.60)"}
        alignItems={{ base: "center", md: "normal" }}
        justifyContent="space-between"
        width="100%"
        borderRadius="60px"
      >
        <Box
          onClick={isOpen ? undefined : () => router.push('/')}
          cursor={isOpen ? 'default' : 'pointer'}
          zIndex={9999}
        >
          <LogoIcon />
        </Box>
        <Box display={{ base: 'block', md: 'none' }} zIndex={9999}>
          <Box>
            <Menu id='menu-button'>
              {!isOpen && (
                <MenuButton
                  as={IconButton}
                  aria-label='Menu'
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                />
              )}

              {isOpen && (
                <MenuButton
                  as={IconButton}
                  aria-label='Close menu'
                  icon={<CloseIcon />}
                  onClick={onClose}
                />
              )}
            </Menu>
          </Box>

          <Drawer onClose={onClose} isOpen={isOpen} size='full' placement="start">
            <DrawerOverlay />
            <DrawerContent bg={"#023648"} mt={20} px={5}>
              <DrawerBody>
                <Link href={FELLOWSHIP_PAGE}>
                  <Text>Fellowship</Text>
                </Link>
                <Link href={SCHOLAR_PAGE}>
                  <Text>Scholar</Text>
                </Link>
                <Link href={ABOUT_PAGE}>
                  <Text>About</Text>
                </Link>
                <Link href={BLOG_PAGE}>
                  <Text>Blog</Text>
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

        <HeaderButtons />
      </Flex>
    </header>
  )
}

export default Header