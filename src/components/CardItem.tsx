import {
    Card, CardBody, CardHeader, Text
} from '@chakra-ui/react';

function CardItem({ title, value }: { title: String, value: String }) {
    return (
        <Card height={150} width={250}>
            <CardHeader>
                <Text>{title}</Text>
            </CardHeader>
            <CardBody>
                <Text>{value}</Text>
            </CardBody>
        </Card>
    )
}
export default CardItem
