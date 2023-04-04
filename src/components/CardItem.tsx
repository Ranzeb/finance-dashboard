import {
    Card, CardBody, CardHeader, Text, VStack
} from '@chakra-ui/react';

function CardItem({ title, value }: { title: String, value: String }) {
    return (
        <Card bg="#d0e1e9" height={150} width={250} textAlign='left' borderRadius={35}>
            <VStack ml={8} mt={4} display={'inline-grid'}>
                <Text as='b' fontSize={'xl'}>{title}</Text>
                <Text as='b' fontSize={'6xl'}>{value}</Text>
            </VStack>
        </Card>
    )
}
export default CardItem
