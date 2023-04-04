import { CalendarIcon } from '@chakra-ui/icons';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { toDoListInterface } from '../interfaces/toDoListInterface';

function ToDoList({ data }: { data: Array<toDoListInterface> }) {
    const toDoData = [
        { title: "Run Payroll", time: new Date() },
        { title: "Review time off request", time: new Date() },
        { title: "Sign board resolution", time: new Date() },
        { title: "Finish onboarding Tony", time: new Date() },
    ]

    return (
        <VStack>
            {toDoData.map((value: toDoListInterface) => {
                return (
                    <HStack spacing={10}>
                        <CalendarIcon boxSize={10} />
                        <VStack>
                            <Text>{value.title}</Text>
                            <Text>{value.time.toUTCString()}</Text>
                        </VStack>
                    </HStack>
                )
            })}
        </VStack>
    )
}


export default ToDoList
