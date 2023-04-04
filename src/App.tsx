import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import {
  ChakraProvider,
  VStack,
  Stack,
  theme,
  Container,
  Box,
  Heading,
  Text,
  Center,
  Flex,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card, CardHeader, CardBody, CardFooter,
  Progress,
  Button
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons'
import './App.css';
import useLagRadar from './useLagRadar';
import Line from './components/Line';


interface toDoListInterface {
  title: string,
  time: Date
}

interface emailTableInterface {
  icon: number,
  name: string,
  description: string,
  time: string
}

function Feature({ title, desc }: { title: String, desc: String }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px'>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

function CardItem({ title, value }: { title: String, value: String }) {
  return (
    <Card height={150} width={250}>
      <CardHeader>
        <Text>{title}</Text>
      </CardHeader>
      <CardBody>
        <Text>{value}</Text>
      </CardBody>
    </Card>
  )
}

function CardStatus({ title, description1, description2, status, progressStatus }: { title: String, description1: String, description2: String, status: String, progressStatus: number }) {
  return (
    <Card height={300} width={350}>
      <CardHeader>
        <Text>{title}</Text>
        <Text>{status}</Text>
        <Progress mt={5} value={progressStatus} />
      </CardHeader>
      <CardBody>
        <Text>{description1}</Text>
        <Text>{description2}</Text>
      </CardBody>
      <CardFooter justifyContent={"center"}>
        <Button colorScheme='blue'>View Status</Button>
      </CardFooter>
    </Card>
  )
}


function CardNotification({ title, description, time }: { title: String, description: String, time: Date }) {
  return (
    <Card height={220} width={350}>
      <CardHeader>
        <Text>{title}</Text>
        <Text>{time.toString()}</Text>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
    </Card>
  )
}

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

function EmailTable({ title, data }: { title: String, data: Array<emailTableInterface> }) {

  const emailData = [
    { icon: 1, name: "Hannah Morgan", description: "Meeting scheduled", time: "1:24 PM" },
    { icon: 2, name: "Megan Clark", description: "Update on a marketing campaign", time: "13:32 PM" },
    { icon: 3, name: "Brandon Williams", description: "Designly 2.0 is about to launch", time: "Yesterday at 8:57 PM" },
    { icon: 4, name: "Reid Smith", description: "My friend Julie loves dappr", time: "Yesterday at 8:49 PM" },
  ]

  return (
    <>
      <Text fontSize='2xl'>{title}</Text>
      <TableContainer>
        <Table variant='simple'>
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
    </>
  )
}

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
