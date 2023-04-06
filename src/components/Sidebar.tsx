import React from 'react'
import { ChakraProvider, HStack, Stack, Text, VStack, Card, Icon, Box } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineHome, HiOutlineChartSquareBar, HiOutlineMail, HiOutlineUserGroup, HiOutlineDocumentText } from 'react-icons/hi';
import { RiMoneyEuroCircleLine } from 'react-icons/ri'
import { FiHexagon } from 'react-icons/fi';
import { GiGreekTemple } from 'react-icons/gi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

function Sidebar() {
    return (
        <Card bg="#000000" textAlign="left" height={'75vh'} width={'8vh'} borderRadius={15} position={'relative'} display={'flex'} justifyContent={'center'}>
            <VStack display={'flex'} justifyContent={'space-between'}>
                <Box position={'absolute'} top={1} marginTop={20}>
                    <Text fontSize='2xl' as='b' color='white'>dappr</Text>
                </Box>
                <Box position={'absolute'} marginRight={90} id='dropdown-sidebar'>
                    <Icon as={IoIosArrowDroprightCircle} boxSize={8} color='white' id='dropdown-sidebar-icon' />
                </Box>
                <VStack spacing={10}>
                    <Icon as={HiOutlineHome} boxSize={8} color='white' />
                    <Icon as={HiOutlineChartSquareBar} boxSize={8} color='white' />
                    <Icon as={FiHexagon} boxSize={8} color='white' />
                    <Icon as={HiOutlineMail} boxSize={8} color='white' />
                    <Icon as={GiGreekTemple} boxSize={8} color='white' />
                    <Icon as={HiOutlineUserGroup} boxSize={8} color='white' />
                    <Icon as={HiOutlineDocumentText} boxSize={8} color='white' />
                    <Icon as={RiMoneyEuroCircleLine} boxSize={8} color='white' />
                </VStack>
                <Box position={'absolute'} bottom={1}>
                    <Icon as={CiSettings} boxSize={7} color='white' marginBottom={10} />
                </Box>
            </VStack>
        </Card >
    )
}

export default Sidebar
