import { Table, TableContainer, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react';
import emailTableInterface from '../interfaces/emailTableInterface';

function EmailTable({ title, data }: { title: String, data: Array<emailTableInterface> }) {

    const emailData = [
        { icon: 1, name: "Hannah Morgan", description: "Meeting scheduled", time: "1:24 PM" },
        { icon: 2, name: "Megan Clark", description: "Update on a marketing campaign", time: "13:32 PM" },
        { icon: 3, name: "Brandon Williams", description: "Designly 2.0 is about to launch", time: "Yesterday at 8:57 PM" },
        { icon: 4, name: "Reid Smith", description: "My friend Julie loves dappr", time: "Yesterday at 8:49 PM" },
    ]

    return (
        <>
            <VStack bg="#d0e1e9" textAlign='left' borderRadius={35} alignItems={"baseline"} w={'100%'}>
                <Text as='b' pl={4} pt={4} fontSize='2xl' textAlign={'left'}>{title}</Text>
                <TableContainer display={'contents'} alignItems={'center'}>
                    <Table variant="unstyled" >
                        <Tbody>
                            {emailData.map((item) => {
                                console.log(item);
                                return (
                                    <Tr>
                                        <Td>{item.icon}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.description}</Td>
                                        <Td>{item.time}</Td>
                                    </Tr>
                                )
                            })}

                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>

        </>
    )
}

export default EmailTable
