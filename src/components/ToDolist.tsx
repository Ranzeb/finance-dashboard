import { Card, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { toDoListInterface } from '../interfaces/toDoListInterface';


function ToDoList({ data }: { data: Array<toDoListInterface> }) {

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function formatAMPM(date: Date): string {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = date.getHours() >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        var minutesString = minutes < 10 ? '0' + minutes : minutes;
        var strTime = month[date.getMonth()] + " " + date.getUTCDate() + " at " + hours + ':' + minutesString + ' ' + ampm;

        return strTime;
    }

    return (
        <VStack alignItems={'baseline'}>
            <Text as='b' fontSize={'2xl'} mb={6}>Your to-Do list</Text>
            {data.map((value: toDoListInterface, idx: number) => {
                return (
                    <HStack key={idx} spacing={5}>
                        <Card bg="#000000" textAlign="left" borderRadius={25} width={'70px'} height={'70px'} justifyContent={'center'} color='white' alignItems={'center'}>
                            <Icon as={value.icon} boxSize={7} />
                        </Card>
                        <VStack alignItems={'baseline'}>
                            <Text as='b' fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '2xl', '2xl': 'md' }}>{value.title}</Text>
                            <Text>{formatAMPM(value.time)}</Text>
                        </VStack>
                    </HStack>
                )
            })}
        </VStack>
    )
}


export default ToDoList
