import { Button, Card, CardBody, CardFooter, CardHeader, Progress, Text, VStack } from '@chakra-ui/react';

function CardStatus({ title, description1, description2, status, progressStatus }: { title: String, description1: String, description2: String, status: String, progressStatus: number }) {
    return (
        <Card bg="#000000" borderRadius={35} height={300} width={350} paddingLeft={3} paddingRight={3}>
            <CardHeader textAlign="left">
                <Text fontSize='2xl' as='b' color={'white'}>{title}</Text>
                <Text color={'white'} mt={2} fontSize='lg'>{status}</Text>
                <Progress mt={5} height={5} value={progressStatus} colorScheme='whiteAlpha' background='#404040' borderRadius={10} />
            </CardHeader>
            <CardBody>
                <VStack spacing={4} mt={-4}>
                    <VStack>
                        <Text fontSize='xl' as='b' color={'white'}>{description1}</Text>
                        <Text color={'white'}>{description2}</Text>
                    </VStack>
                    <Button width={'100%'} textColor={'black'} bg='#d0e1e9'><Text as='b'>View Status</Text></Button>
                </VStack>
            </CardBody>
        </Card>
    )
}
export default CardStatus
