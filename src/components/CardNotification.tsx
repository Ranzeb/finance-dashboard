import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';

function CardNotification({ title, description, time }: { title: String, description: String, time: Date }) {
    return (
        <Card height={220} width={350}>
            <CardHeader>
                <Text>{title}</Text>
                <Text>{time.toString()}</Text>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
        </Card>
    )
}

export default CardNotification
