import {
    Badge,
    Card,
    HStack,
    Text, VStack
} from '@chakra-ui/react';


function CardItem({ title, value, percentage, growth }: { title: String, value: String, percentage: String, growth: Boolean }) {
    return (
        <Card
            bg="#d0e1e9"
            height={{ base: 150, xl: 270, '2xl': 190 }}
            width={{ base: 300, sm: 240, md: 240, lg: 240, xl: 240, '2xl': 240 }}
            textAlign='left'
            borderRadius={35}>
            <VStack ml={8} mt={{ base: 4, lg: 8, xl: 8, '2xl': 4 }} display={'inline-grid'}>
                <Text as='b' fontSize={{ base: 'xl', lg: '3xl', xl: '3xl', '2xl': 'xl' }}>{title}</Text>
                <HStack spacing={8}>
                    <Text as='b' fontSize={{ base: '6xl', lg: '7xl', xl: '7xl', '2xl': '6xl' }}>{value}</Text>
                    <Badge colorScheme={growth ? 'green' : 'red'} borderRadius={5} id='card-item-badge'>{percentage}</Badge>
                </HStack>
            </VStack>
        </Card>
    )
}
export default CardItem
