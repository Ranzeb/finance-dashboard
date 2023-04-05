import { CalendarIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Avatar, Box, Button, Center, Flex, Link, Menu,
    MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text, useColorMode, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg="#dfecf1" px={4} width="100%" mt={20}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box><Text as='b' fontSize={'4xl'}>Good Morning, James!</Text></Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7} alignItems='center'>
                            <CalendarIcon boxSize={5} />
                            <CalendarIcon boxSize={5} />
                            <CalendarIcon boxSize={5} />
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'md'}
                                        src={'https://bit.ly/code-beast'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://bit.ly/code-beast'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}