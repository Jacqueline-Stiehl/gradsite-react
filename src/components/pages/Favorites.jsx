// import React from 'react';
// import "../../src/App.css"
import {
    Grid,
    Card,
    CardBody,
    Image,
    Heading,
    Stack,
    Text,
  } from "@chakra-ui/react";
 import picK from "../../assets/images/favpics/Danika-first-day-of-Kindergarten.jpg";
 import picGr1 from "../../assets/images/favpics/Danika-first-day-of 1st-grade.jpg";
 import picGr2 from "../../assets/images/favpics/Danika-first-day-of-2nd-grade.jpg";
 import picGr3 from "../../assets/images/favpics/Danika-first-day-of-3rd-grade.jpg";
 import picGr4 from "../../assets/images/favpics/Danika-first-day-of-4th-grade.jpg";
 import picGr5 from "../../assets/images/favpics/Danika-first-day-of-5th-grade.jpg";
 import picGr6 from "../../assets/images/favpics/Danika-first-day-of-6th-grade-cropped.jpg";
 import picGr7 from "../../assets/images/favpics/Danika-first-day-of-7th-grade.jpg";
 import picGr8 from "../../assets/images/favpics/Danika-first-day-of-8th-grade.jpg";
 import picGr9 from "../../assets/images/favpics/Danika-first-day-of-9th-grade.jpg";
 import picGr10 from "../../assets/images/favpics/Danika-first-day-of-10th-grade.jpg";
 import picGr11 from "../../assets/images/favpics/Danika-first-day-of-11th-grade.png";
 import picGr12 from "../../assets/images/favpics/Danika-first-day-of-12th-grade.png";

export default function SchoolPics() {

    
  return (
    <div className="fav-content">
<Grid templateColumns="repeat(4, 1fr)" gap={6}>

<Card maxW='md'>
  <CardBody>
    <Image
    // src="../../assets/images/favpics/Danika-first-day-of-Kindergarten.jpg"
    src={picK}
      alt='Danika in kindergarten'
      borderRadius='lg'
      minHeight="610px"
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
    // src="../../src/assets/images/favpics/Danika-first-day-of 1st-grade.jpg"
    src={picGr1}
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
    // src="../src/assets/images/favpics/Danika-first-day-of-2nd-grade.jpg"
    src={picGr2}
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
    // src="../src/assets/images/favpics/Danika-first-day-of-3rd-grade.jpg"
    src={picGr3}
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
    // src="../src/assets/images/favpics/Danika-first-day-of-4th-grade.jpg"
    src={picGr4}
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
    // src="../src/assets/images/favpics/Danika-first-day-of-5th-grade.jpg"
    src={picGr5}
      alt='Danika in 5th grade'
      borderRadius='lg'
      minHeight="615px"
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
    // src="../src/assets/images/favpics/Danika-first-day-of-6th-grade-cropped.jpg"
    src={picGr6}
      alt='Danika in 6th grade'
      borderRadius='lg'
      minHeight="615px"
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
    // src="../src/assets/images/favpics/Danika-first-day-of-7th-grade.jpg"
    src={picGr7}
      alt='Danika in 7th grade'
      borderRadius='lg'
      minHeight="615px"
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
    // src="../src/assets/images/favpics/Danika-first-day-of-8th-grade.jpg"
    src={picGr8}
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
    // src="../src/assets/images/favpics/Danika-first-day-of-9th-grade.jpg"
    src={picGr9}
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
    // src="../src/assets/images/favpics/Danika-first-day-of-10th-grade.jpg"
    src={picGr10}
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
    // src="../src/assets/images/favpics/Danika-first-day-of-11th-grade.png"
    src={picGr11}
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

<Card maxW='md'>
  <CardBody>
    <Image
    // src="../src/assets/images/favpics/Danika-first-day-of-12th-grade.png"
    src={picGr12}
      alt='Danika in 12th grade'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grade 12</Heading>
      <Text>
        This is Danika in twelfth grade.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Danika Grace
      </Text>
    </Stack>
  </CardBody>
</Card>
</Grid>

        
    </div>
   
  );
}

