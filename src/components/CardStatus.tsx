import { Button, Card, CardBody, CardHeader, Progress, Text, VStack } from '@chakra-ui/react';

function CardStatus({ title, description1, description2, status, progressStatus }: { title: String, description1: String, description2: String, status: String, progressStatus: number }) {
    return (
        <Card
            bg="#000000"
            borderRadius={35}
            height={{ base: 310, sm: 310, md: 310, lg: 310, xl: 310, '2xl': 300 }}
            width={{ base: 300, sm: 350, md: 600, lg: 350, xl: 450, '2xl': 350 }}
            paddingLeft={3}
            paddingRight={3}>
            <CardHeader textAlign="left">
                <Text fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '2xl', xl: '2xl', '2xl': '2xl' }} as='b' color={'white'}>{title}</Text>
                <Text color={'white'} mt={2} fontSize={{ base: 'xl', sm: 'xl', md: 'xl', lg: 'lg', xl: 'lg', '2xl': 'lg' }}>{status}</Text>
                <Progress mt={5} height={5} value={progressStatus} colorScheme='whiteAlpha' background='#404040' borderRadius={10} />
            </CardHeader>
            <CardBody>
                <VStack spacing={4} mt={-4}>
                    <VStack>
                        <Text as='b' color={'white'} fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: '2xl', xl: '2xl', '2xl': 'xl' }}>{description1}</Text>
                        <Text color={'white'} fontSize={{ base: 'lg', sm: 'lg', md: 'xl', lg: 'xl', xl: 'xl', '2xl': 'lg' }}>{description2}</Text>
                    </VStack>
                    <Button width={'100%'} textColor={'black'} bg='#d0e1e9'><Text as='b'>View Status</Text></Button>
                </VStack>
            </CardBody>
        </Card>
    )
}
export default CardStatus
