import { CalendarIcon } from '@chakra-ui/icons';
import { HStack, Text, VStack, Card } from '@chakra-ui/react';
import { toDoListInterface } from '../interfaces/toDoListInterface';

function ToDoList({ data }: { data: Array<toDoListInterface> }) {
    const toDoData = [
        { title: "Run Payroll", time: new Date() },
        { title: "Review time off request", time: new Date() },
        { title: "Sign board resolution", time: new Date() },
        { title: "Finish onboarding Tony", time: new Date() },
    ]

    return (
        <VStack alignItems={'baseline'}>
            <Text as='b' fontSize={'2xl'} mb={6}>Your to-Do list</Text>
            {toDoData.map((value: toDoListInterface) => {
                return (
                    <HStack spacing={10}>
                        <Card bg="#000000" textAlign="left" borderRadius={25} width={'70px'} height={'70px'} justifyContent={'center'} color='white' alignItems={'center'}>
                            <CalendarIcon boxSize={7} />
                        </Card>
                        <VStack alignItems={'baseline'}>
                            <Text as='b'>{value.title}</Text>
                            <Text>{value.time.toUTCString()}</Text>
                        </VStack>
                    </HStack>
                )
            })}
        </VStack>
    )
}


export default ToDoList