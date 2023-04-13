import {
    Avatar, Box, Button, Center, Flex, Icon, Menu,
    MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text
} from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RxBell, RxCalendar, RxChatBubble } from 'react-icons/rx';
import { SlArrowDown } from 'react-icons/sl';

export default function Nav() {

    return (
        <>
            <Box bg="#dfecf1" px={4} width="100%" mt={20}>
                <Flex h={16} alignItems={'center'} direction={{ base: 'column', lg: 'row' }} justifyContent={'space-between'}>
                    <Box mb={{ base: '10px' }} >
                        <Text as='b' fontSize={{ lg: '4xl' }}>Good Morning, James!</Text>
                    </Box>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7} alignItems='center'>
                            <Icon as={GiHamburgerMenu} boxSize={6} display={{ '2xl': 'none' }} />
                            <Icon as={RxCalendar} boxSize={6} />
                            <Icon as={RxChatBubble} boxSize={6} />
                            <Icon as={RxBell} boxSize={6} />
                            <Menu>
                                <Avatar
                                    size={'md'}
                                    src={'https://bit.ly/code-beast'}
                                />
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Icon as={SlArrowDown} boxSize={5} />
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