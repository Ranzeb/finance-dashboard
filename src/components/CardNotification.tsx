import { Card, CardHeader, Icon, Text } from '@chakra-ui/react';

const CircleIcon = (props: any) => (
    <Icon viewBox='0 0 200 200' {...props}>
        <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
    </Icon>
)

function convertUTCtoAMPMTime(time: Date): String {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var hour = time.getHours() === 0 ? 12 : (time.getHours() > 12 ? time.getHours() - 12 : time.getHours());
    var min = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    var ampm = time.getHours() < 12 ? 'AM' : 'PM';
    var convertedTime = hour + ':' + min + ' ' + ampm;

    var dayString = weekday[time.getDay()];
    var dayNumber = time.getUTCDate();

    return dayString + " " + dayNumber + " at " + convertedTime;
}

function CardNotification({ title, description, time }: { title: String, description: String, time: Date }) {
    return (
        <Card
            bg="#000000"
            height={190}
            width={{ base: 300, sm: 350, md: 600, lg: 350, xl: 400, '2xl': 350 }}
            textAlign="left"
            borderRadius={35}>
            <CircleIcon id="green-light" boxSize={4} ml={4} color='green.400' />
            <CardHeader ml={10} mr={10} padding="0px">
                <Text color={'white'} as={'b'} fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '2xl', xl: '2xl', '2xl': 'lg' }}>{title}</Text>
                <Text color={'#d0e1e9'} mt={2} fontSize={{ base: 'xl', sm: 'xl', md: 'xl', lg: 'xl', xl: 'xl', '2xl': 'md' }}>{convertUTCtoAMPMTime(time)}</Text>
                <Text color={'grey'} mt={2} fontSize={{ base: 'lg', sm: 'xl', md: 'xl', lg: 'xl', xl: 'xl', '2xl': 'md' }}>{description}</Text>
            </CardHeader>
        </Card>
    )
}

export default CardNotification
