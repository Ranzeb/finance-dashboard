import { As, Box, Card, Flex, Icon, Spacer, Text, VStack } from '@chakra-ui/react';
import { AiOutlineMore } from 'react-icons/ai';

function CardItem({ title, value, icon }: { title: String, value: String, icon: As | undefined }) {

    return (
        <Card bg="#d0e1e9"
            height={{ base: 200, sm: 250, md: 220, lg: 220, xl: 250, '2xl': 200 }}
            width={{ base: 300, sm: 250, md: 250, lg: 250, xl: 300, '2xl': 220 }}
            flex={{ base: '100%', sm: '100%', md: '35%', lg: '35%', xl: '50%', '2xl': '50%' }}
            borderRadius={35}>

            <VStack mt={4} display={{ md: 'inline-grid' }}>
                <Flex textAlign='center' w={'80%'} margin={'auto'}>
                    <Box>
                        <Icon as={icon} boxSize={10} mt={'10px'} />
                    </Box>
                    <Spacer />
                    <Box>
                        <Icon as={AiOutlineMore} boxSize={7} mt={'10px'} />
                    </Box>
                </Flex>
                <VStack display={{ md: 'inline-grid' }} textAlign='left'>
                    <VStack ml={8} display={'inline-grid'}>
                        <Text as='b' fontSize={'3xl'}>{value}</Text>
                        <Box w={'60%'}>
                            <Text fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '2xl', '2xl': 'md' }}>{title}</Text>
                        </Box>
                    </VStack>
                </VStack>
            </VStack>
        </Card >
    )
}
export default CardItem
