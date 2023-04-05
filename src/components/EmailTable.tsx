import { Avatar, Table, TableContainer, Tbody, Td, Text, Tr, VStack, WrapItem } from '@chakra-ui/react';
import emailTableInterface from '../interfaces/emailTableInterface';

function EmailTable({ title, data }: { title: String, data: Array<emailTableInterface> }) {

    const emailData = [
        { icon: 'https://bit.ly/dan-abramov', name: "Hannah Morgan", description: "Meeting scheduled", time: "1:24 PM" },
        { icon: 'https://bit.ly/sage-adebayo', name: "Megan Clark", description: "Update on a marketing campaign", time: "13:32 PM" },
        { icon: 'https://bit.ly/prosper-baba', name: "Brandon Williams", description: "Designly 2.0 is about to launch", time: "Yesterday at 8:57 PM" },
        { icon: 'https://bit.ly/code-beast', name: "Reid Smith", description: "My friend Julie loves dappr", time: "Yesterday at 8:49 PM" },
    ]

    return (
        <>
            <VStack bg="#d0e1e9" textAlign='left' borderRadius={35} alignItems={"baseline"} w={'100%'}>
                <Text as='b' pl={4} pt={4} fontSize='2xl' textAlign={'left'} mb={4}>{title}</Text>
                <TableContainer display={'contents'} alignItems={'center'} textColor='#515960'>
                    <Table variant="unstyled" >
                        <Tbody>
                            {emailData.map((item) => {
                                console.log(item);
                                return (
                                    <Tr>
                                        <Td>
                                            <WrapItem ml={10}>
                                                <Avatar src={item.icon} />
                                            </WrapItem>
                                        </Td>
                                        <Td textAlign={'center'}>
                                            <WrapItem>
                                                {item.name}
                                            </WrapItem>
                                        </Td>
                                        <Td textAlign={'center'}>
                                            <WrapItem>
                                                {item.description}
                                            </WrapItem>
                                        </Td>
                                        <Td textAlign={'end'}>
                                            <WrapItem mr={10} display={'block'}>
                                                {item.time}
                                            </WrapItem>
                                        </Td>
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
