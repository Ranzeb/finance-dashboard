import React from 'react'
import { ChakraProvider, HStack, Stack, Text, VStack, Card } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
function Sidebar() {
    return (
        <Card bg="#000000" textAlign="left" height={'75vh'} width={'8vh'} borderRadius={15} justifyContent={'center'}>
            <VStack spacing={10}>
                <Text fontSize='3xl' color='white'>dappr</Text>
                <CalendarIcon boxSize={10} color='white' />
                <CalendarIcon boxSize={10} color='white' />
                <CalendarIcon boxSize={10} color='white' />
                <CalendarIcon boxSize={10} color='white' />
                <CalendarIcon boxSize={10} color='white' />
                <CalendarIcon boxSize={10} color='white' />
                <CalendarIcon boxSize={10} color='white' />
                <CalendarIcon boxSize={10} color='white' />
            </VStack>
        </Card>
    )
}

export default Sidebar
