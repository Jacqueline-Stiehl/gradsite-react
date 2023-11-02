// based off of Forum.js in MinneGrowtaa

// react imports
import React, { useState, useEffect } from 'react';
// import Upload from '../components/Uploader';
// import {useUserContext} from "../ctx/UserContext";

// Chackra imports
import {Grid, GridItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Button,  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,FormControl, FormLabel, Input, Textarea, Text} from '@chakra-ui/react'

export default function Messages () {
  // const { currUser } = useUserContext();
  // const id = currUser?.data?._id;
  // const [comment, setComment] = useState('');
  // const isUserVerified = !!id;
  const [results, setResults] = useState([]);
  const [ image, setImage] = useState('')
  const [expandedItem, setExpandedItem] = useState(null);
  // const [currentUser, setCurrentUser] = useState(null);
  const [form, setForm] = useState({title: "", content: ""});
  const [ messagePosts, setMessagePosts ] = useState([]);
  const  [ okToRender, setOkToRender ] = useState(false)
  const [deletePost, setdeletePost] = useState([]);
   // code for getting all message posts, useState used and fetch request from api used to bring all message posts from api and turned into array of objects we can map over and display on page
  const searchMessage = async () => {
    const response = await fetch("/api/message");
    const data = await response.json()
    setResults(data.payload);
    // console.log(data.payload)
  }

  useEffect(() => {
    searchMessage();
  }, []);



  // code for displaying my message posts,

  // const myMessagePosts = async (userId) => {
    const myMessagePosts = async () => {
    try {
      const response1 = await fetch(`/api/`);
      const messagePostsData = await response1.json()
      setMessagePosts(messagePostsData.payload.myMessages)
      setOkToRender(true);
    } catch (error) {
      console.error('error fetching message posts', error);
    }
  };
  useEffect(() => {
    if( currUser?.data?._id )
      myMessagePosts(currUser?.data?._id) 
  }, [currUser]);

  //code for modals, one for message post one for reply, this makes the two buttons open different models
  const { isOpen: isMessageOpen , onOpen: onMessageOpen, onClose: onMessageClose } = useDisclosure()
  const { isOpen: isReplyOpen , onOpen: onReplyOpen, onClose: onReplyClose } = useDisclosure()


  // monitors what is being typed in new message post form
  let handleInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }


  // code for submitting new message post, text from modal input fields is turned into object and posted to api/message with the rest of the message posts. Has to be stringified
  const [value, setValue] = React.useState('')
  const onSubmit = async () => {
    try {
      let response = await fetch('/api/message', {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify( {title: form.title, content: form.content, image: image, userId: id} )
      })
      console.log("success")
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  
  // monitors what is being typed in reply modal form
  const [reply, setReply] = useState({text: "", messageId: ""});
  let handleReplyInputChange = (e) => {
      setReply({...reply, [e.target.name]: e.target.value})
    }


  // handles accordian functionality
  let handleAccordianClickChange = (e) => {
    // console.log(e.target.id)
    setReply({...reply, messageId: e.target.id})
  }


  // code for post reply to message post
  // const onReply = async () => {
  //   try {
  //     let response = await fetch(`/api/comment/${reply.messageId}`, {
  //       method: "POST",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify({text: reply.text, userId: id })
  //     })
  //     console.log(reply)
  //     console.log("success")
  //     window.location.reload();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  // const fetchCurrentUser = async () => {
  //   try {
  //     const response = await fetch("/api/user");
  //     const data = await response.json();
  //     setCurrentUser(data.user);
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //   }
  // };

  useEffect(() => {
    fetchCurrentUser();
    searchMessage();
  }, []);


  // delete route for users message posts
  const onDelete = async (event) => {
    try {
      const response = await fetch(`/api/message/${event.target.id}`, {
        method: "DELETE",
      });
      console.log(response)
      const data = await response.json();
      setCurrentUser(data.user);
      window.location.reload();
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  // const onDeleteComment = async (commentId) => {
  //   if (commentId) {
  //     try {
  //       const response = await fetch(`/api/comment/${commentId}`, {
  //         method: "DELETE",
  //       });
  
  //       if (response.status === 200) {
  //         const data = await response.json();
  //         setCurrentUser(data.user);
  //         window.location.reload();
  //       } else {
  //         console.error("Error deleting comment:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error deleting comment:", error);
  //     }
  //   }
  // };

  if( !okToRender ) return <p>Loading...</p>

  return (
    <div className="messagecontainer">
    <>
        <Grid className="message-content"
        minHeight='300px'
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        
          <GridItem colSpan={1} className="postgrid">
            <h2 style={{ whiteSpace: 'nowrap' }}>My Posts</h2>
            <Button colorScheme='green' onClick={onMessageOpen}>New Post</Button>

            <Modal isOpen={isMessageOpen} onClose={onMessageClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>New Message Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl controlId='messageTitle'>
                    <FormLabel>Message Post Title:</FormLabel>
                    <Input type='text' value={form.title} onChange={handleInputChange} name="title" />
                  </FormControl>
                  <FormControl>
                    <Text mb='8px'>Message Post Content:</Text>
                    <Textarea
                      value={form.content}
                      onChange={handleInputChange}
                      placeholder='Enter Post Content Here'
                      size='lg'
                      name="content"
                    />
                  </FormControl>

                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='green' mr={3} onClick={onSubmit}>
                    Submit
                  </Button>
                  <Upload setImage={setImage} />
                </ModalFooter>
              </ModalContent>
            </Modal>
            <p></p>
            <div>
              {messagePosts.map((index) => (
                <div className="myposts" key={index.title}>
                    <Text isTruncated maxW="16ch" flex="1" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                      "{index.title}"
                    </Text>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Button colorScheme='orange' onClick={onDelete} id={index._id}>
                        Delete
                      </Button>
                    </div>
                </div>
              ))}
            </div>



          </GridItem>
        <GridItem className="allpostgrid" colSpan={4}>
          <h2>Messages for Danika</h2>
          <h6>Leave a message for Danika for her graduation</h6>
          <Accordion allowToggle>
          {results.map((data, index) => (
            <AccordionItem key={index}>
              <h2 style={{ marginBottom: '0px' }}>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' id={data._id} key={data.title} onClick={handleAccordianClickChange}>
                    {`${data.title}`}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className="message-panel" pb={4}>
                <Box maxH="400px" overflowY="auto" border="1px solid lightgrey" borderRadius="8px">
                  <div className="message-img">
                    <img src={`${data.image}`} alt="image of plants" width="500" height="300"></img>
                  </div>
                  <div className="message-cnt">
                    {`${data.content}`}
                  </div>
                </Box>
                <div className="replybox">
                <div className="message-reply">
                  <p>Replies:</p>
                  <Button colorScheme='blue' onClick={onReplyOpen}>Add Reply</Button>
                </div>
                {data.commentId.map((comment, index) => (
                  <div className="replies" key={comment.id}>
                    <span>"{comment.text}"</span>
                    {comment.userId === currUser?.data?._id && (
                      <Button colorScheme='orange' onClick={() => onDeleteComment(comment._id)}>
                        Delete
                      </Button>
                    )}
                  </div>
                ))}
                </div>
                <Modal isOpen={isReplyOpen} onClose={onReplyClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Reply to Message Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <FormControl>
                    <Text mb='8px'>Reply to Post Here:</Text>
                    <Textarea
                      value={reply.text}
                      onChange={handleReplyInputChange}
                      placeholder='Enter Reply Here'
                      size='lg'
                      name="text"
                      // key={reply.text}
                    />
                    </FormControl>
                      
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={() => onReply(data._id)}>
                        Submit
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </AccordionPanel>
            </AccordionItem>
            ))}
          </Accordion>
        </GridItem>
      </Grid>
    </>
    </div>
  )
}


