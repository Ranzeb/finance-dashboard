import { Button, Card, CardBody, CardFooter, CardHeader, Progress, Text } from '@chakra-ui/react';

function CardStatus({ title, description1, description2, status, progressStatus }: { title: String, description1: String, description2: String, status: String, progressStatus: number }) {
    return (
        <Card bg="#000000" borderRadius={35} height={300} width={350} paddingLeft={3} paddingRight={3}>
            <CardHeader textAlign="left">
                <Text fontSize='2xl' color={'white'}>{title}</Text>
                <Text color={'white'}>{status}</Text>
                <Progress mt={5} value={progressStatus} colorScheme='pink' background='#404040' borderRadius={10} />
            </CardHeader>
            <CardBody>
                <Text color={'white'}>{description1}</Text>
                <Text color={'white'}>{description2}</Text>
            </CardBody>
            <CardFooter justifyContent={"center"}>
                <Button textColor={'black'} bg='#d0e1e9'>View Status</Button>
            </CardFooter>
        </Card>
    )
}
export default CardStatus