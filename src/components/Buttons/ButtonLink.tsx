import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'

import Link from '@/components/Link'

// TODO: Implement ButtonLink component
const ButtonLink = ({...props}) => {
  return (
    <ChakraButton as={Link} {...props} />
  )
}

export default ButtonLink