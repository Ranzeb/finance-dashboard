import {
    Card, CardBody, CardHeader, Text, VStack, Badge, HStack
} from '@chakra-ui/react';


function CardItem({ title, value, percentage, growth }: { title: String, value: String, percentage: String, growth: Boolean }) {
    return (
        <Card bg="#d0e1e9" height={150} width={250} textAlign='left' borderRadius={35}>
            <VStack ml={8} mt={4} display={'inline-grid'}>
                <Text as='b' fontSize={'xl'}>{title}</Text>
                <HStack spacing={8}>
                    <Text as='b' fontSize={'6xl'}>{value}</Text>
                    <Badge colorScheme={growth ? 'green' : 'red'} size='xl' borderRadius={5} id='card-item-badge'>{percentage}</Badge>
                </HStack>
            </VStack>
        </Card>
    )
}
export default CardItem
