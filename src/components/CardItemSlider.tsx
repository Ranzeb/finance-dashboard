import {
    Card, CardBody, CardHeader, Text, VStack, Box, Flex, Spacer
} from '@chakra-ui/react';

import { CalendarIcon } from '@chakra-ui/icons';

function CardItem({ title, value }: { title: String, value: String }) {
    return (
        <Card bg="#d0e1e9" height={200} width={220} textAlign='left' borderRadius={35}>
            <VStack mt={4} display={'inline-grid'}>
                <Flex textAlign='center' w={'80%'} margin={'auto'}>
                    <Box>
                        <CalendarIcon boxSize={7} />
                    </Box>
                    <Spacer />
                    <Box>
                        <CalendarIcon boxSize={7} />
                    </Box>
                </Flex>
                <VStack display={'inline-grid'} textAlign='left'>
                    <VStack ml={8} display={'inline-grid'}>
                        <Text as='b' fontSize={'xl'}>{title}</Text>
                        <Text as='b' fontSize={'6xl'}>{value}</Text>
                    </VStack>
                </VStack>
            </VStack>
        </Card >
    )
}
export default CardItem
