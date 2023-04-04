import { Button, Card, CardBody, CardFooter, CardHeader, Progress, Text } from '@chakra-ui/react';

function CardStatus({ title, description1, description2, status, progressStatus }: { title: String, description1: String, description2: String, status: String, progressStatus: number }) {
    return (
        <Card height={300} width={350}>
            <CardHeader>
                <Text>{title}</Text>
                <Text>{status}</Text>
                <Progress mt={5} value={progressStatus} />
            </CardHeader>
            <CardBody>
                <Text>{description1}</Text>
                <Text>{description2}</Text>
            </CardBody>
            <CardFooter justifyContent={"center"}>
                <Button colorScheme='blue'>View Status</Button>
            </CardFooter>
        </Card>
    )
}
export default CardStatus
