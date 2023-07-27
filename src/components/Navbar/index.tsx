'use client'

import Link from 'next/link'
import {useSession, signOut} from 'next-auth/react'

import {RiLuggageDepositLine} from 'react-icons/ri'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = [
  {
    nome:'Painel', 
    href:'/painel'
  },
  {
    nome:'Estoque',
    href:'/estoque'
  }
]

const Navigation = ({children, href}:{children:any, href:any}) =>{
  
  return (
    <Link href={href}>
      <button className="w-full min-w-[100px] font-medium text-black bg-white hover:bg-[#929292] p-2 rounded-md duration-300 hover:scale-110">
        {children}
      </button>
    </Link>
  )
}

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {data:session, status} = useSession()
  
  return (
    <>
      <Box bg={useColorModeValue('#7F5AF0','#7F5AF0')} px={4} fontSize={'16px'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} textColor='#fff'>
            <Box><RiLuggageDepositLine size={'60px'}/></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Navigation key={link.nome} href={link.href}>{link.nome}</Navigation>
              ))}
            </HStack>
          </HStack>
            
          <Flex direction={'row'} alignItems={'center'} >
            <Menu >
              <Box 
                textColor={'#fff'}
                fontWeight={'medium'}
                letterSpacing={'1px'}
                px={'10px'}
                display={{base:'none',md:'block'}}
                
              >
                {session?.user?.name}
              </Box>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                bgColor={'#7F5AF0'}
                >
                <Avatar
                  size={'md'}
                  src={`${session?.user?.image}`}
                />
              </MenuButton>
              <MenuList>
                {/* <MenuItem >Link 1</MenuItem>
                <MenuItem >Link 2</MenuItem> */}
                <MenuDivider />
                <MenuItem onClick={()=>signOut({redirect: false, callbackUrl: "/"})}>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} >
              {Links.map((link) => (
                <Navigation key={link.nome} href={link.href}>{link.nome}</Navigation>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}