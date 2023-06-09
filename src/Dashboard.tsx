import { Card, HStack, Icon, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import CardItem from './components/CardItem';
import CardItemSlider from './components/CardItemSlider';
import CardNotification from './components/CardNotification';
import CardStatus from './components/CardStatus';
import EmailTable from './components/EmailTable';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ToDoList from './components/ToDolist';

import { faker } from '@faker-js/faker';
import {
    CategoryScale,
    Chart as ChartJS,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import { Line } from "react-chartjs-2";
import { BsClipboardCheck, BsClipboardData } from 'react-icons/bs';
import { TfiTicket } from 'react-icons/tfi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { FiPieChart } from 'react-icons/fi';
import { TbCalendarTime } from 'react-icons/tb';
import { BiCreditCard } from 'react-icons/bi';


export default function Dashboard() {

    ChartJS.register([
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip
    ]);

    const emailData = [
        { icon: 'https://bit.ly/dan-abramov', name: "Hannah Morgan", description: "Meeting scheduled", time: "1:24 PM" },
        { icon: 'https://bit.ly/sage-adebayo', name: "Megan Clark", description: "Update on a marketing campaign", time: "13:32 PM" },
        { icon: 'https://bit.ly/prosper-baba', name: "Brandon Williams", description: "Designly 2.0 is about to launch", time: "Yesterday at 8:57 PM" },
        { icon: 'https://bit.ly/code-beast', name: "Reid Smith", description: "My friend Julie loves dappr", time: "Yesterday at 8:49 PM" },
    ]

    const toDoData = [
        { icon: AiOutlineClockCircle, title: "Run Payroll", time: new Date() },
        { icon: TfiTicket, title: "Review time off request", time: new Date() },
        { icon: BsClipboardData, title: "Sign board resolution", time: new Date() },
        { icon: BsClipboardCheck, title: "Finish onboarding Tony", time: new Date() },
    ]

    const notificationDescription = "You have been invited to a meeting of the Board Directors";

    const title = "Formation Status";
    const description1 = "Estimated processing";
    const description2 = "4 - 5 business day";
    const status = "In progress";
    const progressStatus = 30;


    const options = {
        interaction: {
            mode: "index" as "index"
        },
        responsive: true,
        scales: {
            x: {
                // to remove the x-axis grid
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
    };

    const labels = ['Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20'];

    const data = {
        labels,
        datasets: [
            {
                label: 'This week',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 20000 })),
                borderColor: 'black',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Last week',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 20000 })),
                borderColor: '#98bfd1',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    };

    return (
        <Stack bg="#dfecf1">
            <HStack margin="auto" spacing={{ base: 0, sm: 0, md: 0, lg: 0, xl: 8, '2xl': 8 }}>
                <Sidebar />
                <VStack id='main-container' spacing={8}>
                    <Navbar />
                    <Stack direction={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'column', '2xl': 'row' }} spacing={8} >
                        <VStack spacing={8} width={'100%'} justifyContent={'center'} alignItems={'center'} w={{ base: '100%', xl: '100%', '2xl': '200%' }}>
                            <Stack direction={'row'} w={'100%'} justifyContent={{ base: 'center', sm: 'end', md: 'center', lg: 'end', xl: 'end', '2xl': 'end' }}>
                                <Icon as={RiArrowDropLeftLine} boxSize={8} />
                                <Icon as={RiArrowDropRightLine} boxSize={8} />
                            </Stack>
                            <SimpleGrid columns={[1, null, 2, 4]} spacing={10}>
                                <CardItemSlider title="Your bank balance" value="$143,624" icon={MdOutlineAccountBalanceWallet} />
                                <CardItemSlider title="Uncategorized transactions" value="12" icon={FiPieChart} />
                                <CardItemSlider title="Employees working today" value="7" icon={TbCalendarTime} />
                                <CardItemSlider title="This week's card spending" value="$3,287.49" icon={BiCreditCard} />
                            </SimpleGrid>
                            <Stack
                                direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', '2xl': 'row' }}
                                width={'100%'}
                                justifyContent={'center'}
                                alignItems={'center'}>
                                <Stack
                                    mb={{ base: 10, sm: 10, md: 10, xl: 0, '2xl': 0 }}
                                    direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'column', '2xl': 'column' }}
                                    spacing={{ base: 12, sm: 12, md: 12, lg: 12, xl: 12, '2xl': 8 }}
                                    height={'100%'}>
                                    <CardItem title="New clients" value="54" percentage={'+18.7%'} growth={true} />
                                    <CardItem title="Invoices Overdue" value="6" percentage={'+2.7%'} growth={false} />
                                </Stack>
                                <VStack spacing={8} w={{ base: '80%', sm: '80%', md: '80%', lg: '50%', xl: '100%' }} >
                                    <Card bg="#d0e1e9" textAlign='left' borderRadius={35} w={'100%'} h={'100%'}>
                                        <VStack ml={8} mt={4} display={'inline-grid'} mb={5} mr={8}>
                                            <Text as='b' fontSize={'2xl'}>Revenue</Text>
                                            <Line options={options} data={data} />
                                        </VStack>
                                    </Card>
                                </VStack>
                            </Stack>
                            <EmailTable
                                title='Recent Emails'
                                data={emailData}
                            />
                        </VStack>
                        <Stack
                            direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', '2xl': 'column' }}
                            spacing={12}
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <CardStatus title={title} status={status} progressStatus={progressStatus} description1={description1} description2={description2} />
                            <ToDoList data={toDoData} />
                            <CardNotification title="Board Meeting" description={notificationDescription} time={new Date()} />
                        </Stack>
                    </Stack>
                </VStack>
            </HStack>
        </Stack >
    );
}