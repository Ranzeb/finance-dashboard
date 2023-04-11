import { ChakraProvider, HStack, Stack, VStack, Box, Icon, Text, Card, extendTheme } from '@chakra-ui/react';
import './App.css';
import CardItem from './components/CardItem';
import CardItemSlider from './components/CardItemSlider';
import CardNotification from './components/CardNotification';
import CardStatus from './components/CardStatus';
import EmailTable from './components/EmailTable';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ToDoList from './components/ToDolist';
import useLagRadar from './useLagRadar';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import TestChart from './components/TestChart';
import MyChart from './components/TestChart';
import { AiOutlineClockCircle } from 'react-icons/ai';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js';
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker';
import { TfiTicket } from 'react-icons/tfi';
import { BsClipboardCheck, BsClipboardData } from 'react-icons/bs';


function App() {

  useLagRadar();

  ChartJS.register([
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  ]);

  const customTheme = extendTheme({
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: 'white'
          }
        }
      }
    }
  })

  const emailData = [
    { icon: 1, name: "Hannah Morgan", description: "Meeting scheduled", time: "1:24 PM" },
    { icon: 2, name: "Megan Clark", description: "Update on a marketing campaign", time: "13:32 PM" },
    { icon: 3, name: "Brandon Williams", description: "Designly 2.0 is about to launch", time: "Yesterday at 8:57 PM" },
    { icon: 4, name: "Reid Smith", description: "My friend Julie loves dappr", time: "Yesterday at 8:49 PM" },
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
    <ChakraProvider theme={customTheme}>
      <Stack bg="#dfecf1">
        <HStack width="54%" margin="auto" spacing={8}>
          <Sidebar />
          <VStack id='main-container' spacing={8} direction='row'>
            <Navbar />
            <HStack spacing={8}>
              <VStack spacing={8} alignItems={'end'}>
                <Box position={'absolute'}>
                  <Icon as={RiArrowDropLeftLine} boxSize={8} />
                  <Icon as={RiArrowDropRightLine} boxSize={8} />
                </Box>
                <HStack spacing={4}>
                  <CardItemSlider title="Your bank balance" value="$143,624" iconName="MdOutlineAccountBalanceWallet" />
                  <CardItemSlider title="Uncategorized transactions" value="12" iconName="FiPieChart" />
                  <CardItemSlider title="Employees working today" value="7" iconName="TbCalendarTime" />
                  <CardItemSlider title="This week's card spending" value="$3,287.49" iconName="BiCreditCard" />
                </HStack>
                <HStack width={'100%'} height={'calc(25vh)'}>
                  <VStack spacing={4} display={'flex'} flexDirection={'column'} height={'100%'}>
                    <CardItem title="New clients" value="54" percentage={'+18.7%'} growth={true} />
                    <CardItem title="Invoices Overdue" value="6" percentage={'+2.7%'} growth={false} />
                  </VStack>
                  <VStack spacing={8} w={'100%'}>
                    <Card bg="#d0e1e9" width={'100%'} height={'100%'} textAlign='left' borderRadius={35}>
                      <VStack ml={8} mt={4} display={'inline-grid'} mb={5} mr={8}>
                        <Text as='b' fontSize={'2xl'}>Revenue</Text>
                        <Line options={options} data={data} />
                      </VStack>
                    </Card>
                  </VStack>
                </HStack>
                <EmailTable
                  title='Recent Emails'
                  data={emailData} />
              </VStack>
              <VStack spacing={12}>
                <CardStatus title={title} status={status} progressStatus={progressStatus} description1={description1} description2={description2} />
                <ToDoList data={toDoData} />
                <CardNotification title="Board Meeting" description={notificationDescription} time={new Date()} />
              </VStack>
            </HStack>
          </VStack>
        </HStack>
      </Stack>
    </ChakraProvider >
  );
}

export default App;
