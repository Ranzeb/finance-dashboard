import { Box, Card, Flex, Icon, Spacer, Text, VStack } from '@chakra-ui/react';
import { AiOutlineMore } from 'react-icons/ai';
import { BiCreditCard } from 'react-icons/bi';
import { FiPieChart } from 'react-icons/fi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { TbCalendarTime } from 'react-icons/tb';

function CardItem({ title, value, iconName }: { title: String, value: String, iconName: String }) {

    const icons = new Map();
    icons.set("MdOutlineAccountBalanceWallet", MdOutlineAccountBalanceWallet);
    icons.set("FiPieChart", FiPieChart);
    icons.set("TbCalendarTime", TbCalendarTime);
    icons.set("BiCreditCard", BiCreditCard);

    return (
        <Card bg="#d0e1e9" height={{ base: 200, xl: 250, '2xl': 200 }} width={{ base: 220, xl: 300, '2xl': 220 }} borderRadius={35} flex={{ base: '35%', sm: '35%', md: '35%', lg: '35%', xl: '50%', '2xl': '50%' }}>
            <VStack mt={4} display={{ md: 'inline-grid' }}>
                <Flex textAlign='center' w={'80%'} margin={'auto'}>
                    <Box>
                        <Icon as={icons.get(iconName)} boxSize={10} mt={'10px'} />
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
                            <Text fontSize={'md'}>{title}</Text>
                        </Box>
                    </VStack>
                </VStack>
            </VStack>
        </Card >
    )
}
export default CardItem
