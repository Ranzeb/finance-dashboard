import { Avatar, Box, Table, Tbody, Td, Text, Tr, VStack, WrapItem } from '@chakra-ui/react';
import emailTableInterface from '../interfaces/emailTableInterface';

function EmailTable({ title, data }: { title: String, data: Array<emailTableInterface> }) {

    return (
        <>
            <VStack bg="#d0e1e9" borderRadius={35} alignItems={{ base: 'center', sm: "baseline" }} w={{ base: '80%', sm: '80%', md: '80%', lg: '100%' }}>
                <Text as='b' pl={4} pt={4} fontSize='2xl' mb={4}>{title}</Text>
                <Box display={'contents'} alignItems={'center'} textColor='#515960'>
                    <Table variant="unstyled" size={{ base: 'sm', md: 'md', lg: 'md' }}>
                        <Tbody>
                            {data.map((item: emailTableInterface, idx: number) => {
                                return (
                                    <Tr key={idx}>
                                        <Td>
                                            <WrapItem ml={10} display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
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
