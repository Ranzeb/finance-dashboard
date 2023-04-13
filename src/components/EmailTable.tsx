import { Avatar, Table, TableContainer, Tbody, Td, Text, Tr, VStack, WrapItem, Box } from '@chakra-ui/react';
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
            <VStack bg="#d0e1e9" textAlign='left' borderRadius={35} alignItems={"baseline"} w={{ base: '50%', sm: '80%', md: '80%', lg: '100%' }}>
                <Text as='b' pl={4} pt={4} fontSize='2xl' textAlign={'left'} mb={4}>{title}</Text>
                <Box display={'contents'} alignItems={'center'} textColor='#515960'>
                    <Table variant="unstyled" size={{ base: 'sm', md: 'md', lg: 'md' }}>
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
                                            <WrapItem fontSize={{ base: 'md', md: 'md', lg: 'xl', xl: 'xl', '2xl': 'md' }}>
                                                {item.name}
                                            </WrapItem>
                                        </Td>
                                        <Td textAlign={'center'}>
                                            <WrapItem fontSize={{ base: 'md', md: 'md', lg: 'xl', xl: 'xl', '2xl': 'md' }}>
                                                {item.description}
                                            </WrapItem>
                                        </Td>
                                        <Td textAlign={'end'}>
                                            <WrapItem mr={10} display={'block'} fontSize={{ base: 'md', md: 'md', lg: 'xl', xl: 'xl', '2xl': 'md' }}>
                                                {item.time}
                                            </WrapItem>
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </Box>
            </VStack>

        </>
    )
}

export default EmailTable
