// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import {
    Grid,
    Card,
    CardBody,
    Image,
    Heading,
    Stack,
    Text,
  } from "@chakra-ui/react";

export default function SchoolPics() {

    
  return (
    <div className="fav-content">
<Grid templateColumns="repeat(4, 1fr)" gap={6}>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/kindergarten.jpg"
      alt='Danika in kindergarten'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Kindergarten</Heading>
      <Text>
        This is Danika in kindergarten.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade1.jpg"
      alt='Danika in 1st grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 1</Heading>
      <Text>
        This is Danika in first grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade2.jpg"
      alt='Danika in 2nd grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 2</Heading>
      <Text>
        This is Danika in second grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade3.jpg"
      alt='Danika in 3rd grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 3</Heading>
      <Text>
        This is Danika in third grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade4.jpg"
      alt='Danika in 4th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 4</Heading>
      <Text>
        This is Danika in fourth grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade5.jpg"
      alt='Danika in 5th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 5</Heading>
      <Text>
        This is Danika in fifth grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade6.jpg"
      alt='Danika in 6th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 6</Heading>
      <Text>
        This is Danika in sixth grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>
<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade7.jpg"
      alt='Danika in 7th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 7</Heading>
      <Text>
        This is Danika in seventh grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade8.jpg"
      alt='Danika in 8th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 8</Heading>
      <Text>
        This is Danika in eighth grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade9.jpg"
      alt='Danika in 9th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 9</Heading>
      <Text>
        This is Danika in ninth grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade10.jpg"
      alt='Danika in 10th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 10</Heading>
      <Text>
        This is Danika in tenth grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='md'>
  <CardBody>
    <Image
    src="../src/assets/images/grade11.jpg"
      alt='Danika in 11th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 11</Heading>
      <Text>
        This is Danika in eleventh grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>
</Grid>

        {/* <>
        <Grid
          className="favgrid"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem colSpan={1}>
            <Card className="favleftcard" size="lg">
              <CardHeader className="pvanish">
                <Box className="contentz">
                  <Heading size="md" padding="5px">
                    Danika's School Pics
                  </Heading>
                </Box>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem className="favrightcard" rowSpan={1} colSpan={2}>
            <h2 className="planner-title">Danika's School Pictures</h2>
            
            <Accordion allowToggle>
                  <AccordionItem className="fav-acc">
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {`${data.name}`}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="forum-panel" pb="1em">
                      <Box
                        maxH="400px"
                        overflowY="auto"
                        border="1px solid lightgrey"
                        borderRadius="8px"
                        pb="1em"
                        mb="1em"
                      >
                        <div className="forum-img">
                          <img
                            // src={`${data.image}`}
                            src="../../images/grade7.png"
                            alt="image of plants"
                            width="100%"
                            height="auto"
                          ></img>
                        </div>
                      </Box>
                      <Box
                        className="forum-panel"
                        maxH="20em"
                        overflowY="auto"
                        border="1px solid lightgrey"
                        borderRadius="8px"
                        mb="1em"
                      >
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                
            </Accordion>
          </GridItem>
        </Grid>
      </> */}
      {/* DIVIDER */}
        {/* <Card color="blue">
            <CardBody>
            <Image src="../../assets/images/grade7.jpg"/>
            <Stack mt="6" spacing="3">
                <Heading size="md" color="white">KINDERGARTEN</Heading>
            </Stack>
            </CardBody>
            <Divider/>
            <CardFooter>
                <Text color="white">Card Footer Here</Text>
            </CardFooter>
        </Card> */}

        
            {/* <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Box w="180px" h="200px" bg="white.500">
                <Image src="../../assets/images/grade7.jpg"/></Box>
                <Box w="180px" h="200px" bg="white.500"/>
                <Box w="180px" h="200px" bg="white.500"/>
            </Grid>
            <Text>KINDERGARTEN</Text> */}
        
   
    {/* <Row xs={1} md={2} className="g-4"> */}
        
        
    {/* <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>KINDERGARTEN</Card.Title>
          <Card.Text>
          KINDERGARTEN
          </Card.Text>
          </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>FIRST GRADE</Card.Title>
          <Card.Text>
            FIRST GRADE{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>SECOND GRADE</Card.Title>
          <Card.Text>
            SECOND GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>THIRD GRADE</Card.Title>
          <Card.Text>
            THIRD GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>FOURTH GRADE</Card.Title>
          <Card.Text>
            FOURTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>FIFTH GRADE</Card.Title>
          <Card.Text>
            FIFTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>SIXTH GRADE</Card.Title>
          <Card.Text>
            SIXTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="../../assets/images/grade7.jpg" />
        <Card.Body>
          <Card.Title>SEVENTH GRADE</Card.Title>
          <Card.Text>
            SEVENTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>EIGHTH GRADE</Card.Title>
          <Card.Text>
            EIGHTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>NINTH GRADE</Card.Title>
          <Card.Text>
            NINTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>TENTH GRADE</Card.Title>
          <Card.Text>
            TENTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>ELEVENTH GRADE</Card.Title>
          <Card.Text>
            ELEVENTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>TWELFTH GRADE</Card.Title>
          <Card.Text>
            TWELFTH GRADE
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup> */}
    
        
    {/* </Row> */}
    </div>
   
  );
}

// export default SchoolPics;