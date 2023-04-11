import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import { Icon, createIcon } from '@chakra-ui/react'

const CircleIcon = (props: any) => (
    <Icon viewBox='0 0 200 200' {...props}>
        <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
    </Icon>
)

function CardNotification({ title, description, time }: { title: String, description: String, time: Date }) {
    return (
        <Card bg="#000000" height={190} width={350} textAlign="left" borderRadius={35}>
            <CircleIcon id="green-light" boxSize={4} ml={4} color='green.400' />
            <CardHeader ml={10} mr={10} padding="0px">
                <Text color={'white'} as={'b'}>{title}</Text>
                <Text color={'#d0e1e9'} mt={2}>{time.toString()}</Text>
                <Text color={'grey'} mt={2}>{description}</Text>
            </CardHeader>
        </Card>
    )
}

export default CardNotification
