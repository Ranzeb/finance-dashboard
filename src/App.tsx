import { CalendarIcon } from '@chakra-ui/icons';
import { ChakraProvider, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import './App.css';
import CardItem from './components/CardItem';
import CardNotification from './components/CardNotification';
import CardStatus from './components/CardStatus';
import EmailTable from './components/EmailTable';
import Line from './components/Line';
import ToDoList from './components/ToDolist';
import useLagRadar from './useLagRadar';

function App() {

  useLagRadar();

  const emailData = [
    { icon: 1, name: "Hannah Morgan", description: "Meeting scheduled", time: "1:24 PM" },
    { icon: 2, name: "Megan Clark", description: "Update on a marketing campaign", time: "13:32 PM" },
    { icon: 3, name: "Brandon Williams", description: "Designly 2.0 is about to launch", time: "Yesterday at 8:57 PM" },
    { icon: 4, name: "Reid Smith", description: "My friend Julie loves dappr", time: "Yesterday at 8:49 PM" },
  ]

  const toDoData = [
    { title: "Run Payroll", time: new Date() },
    { title: "Review time off request", time: new Date() },
    { title: "Sign board resolution", time: new Date() },
    { title: "Finish onboarding Tony", time: new Date() },
  ]

  const notificationDescription = "You have been invited to a meeting of the Board Directors";

  const title = "Formation Status";
  const description1 = "Estimated processing";
  const description2 = "4 - 5 business day";
  const status = "In progress";
  const progressStatus = 30;

  return (
    <ChakraProvider>
      <Stack id='main-container' spacing={8} direction='row'>
        <VStack spacing={10}>
          <Text fontSize='3xl'>dappr</Text>
          <CalendarIcon boxSize={10} />
          <CalendarIcon boxSize={10} />
          <CalendarIcon boxSize={10} />
          <CalendarIcon boxSize={10} />
          <CalendarIcon boxSize={10} />
          <CalendarIcon boxSize={10} />
          <CalendarIcon boxSize={10} />
          <CalendarIcon boxSize={10} />
        </VStack>
        <VStack>
          <HStack>
            <CardItem title="New clients" value="54" />
            <CardItem title="Invoices Overdue" value="6" />
            <CardItem title="New clients" value="54" />
            <CardItem title="Invoices Overdue" value="6" />
          </HStack>
          <HStack>
            <VStack spacing={8}>
              <CardItem title="New clients" value="54" />
              <CardItem title="Invoices Overdue" value="6" />
            </VStack>
            <VStack spacing={8}>
              <Line />
            </VStack>
          </HStack>
          <EmailTable
            title='Recent Emails'
            data={emailData} />
        </VStack>
        <VStack spacing={8}>
          <CardStatus title={title} status={status} progressStatus={progressStatus} description1={description1} description2={description2} />
          <ToDoList data={toDoData} />
          <CardNotification title="Board Meeting" description={notificationDescription} time={new Date()} />
        </VStack>
      </Stack>
    </ChakraProvider >
  );
}

export default App;
