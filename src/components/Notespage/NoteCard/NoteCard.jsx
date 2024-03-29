import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function NoteCard({ title, body, user, _id }) {
  const dispatch = useDispatch();
  // const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateNote = () => {
    dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
    onClose();
  };

  return (
    <Card
      boxShadow={"inset 5px 5px 100px #7a420c, inset -5px -5px 100px #ffa820"}
      backgroundColor={"#da7516"}
    >
      <CardBody>
        <VStack>
          <Heading>{title}</Heading>
          <Text>{body}</Text>

          <Flex gap={2}>
            <>
              <Button onClick={onOpen}>Edit</Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      value={tempTitle}
                      m
                      placeholder="Please enter title"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Input>
                    <Textarea
                      mt={8}
                      value={tempBody}
                      placeholder={"Please enter description"}
                      onChange={(e) => setBody(e.target.value)}
                    ></Textarea>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="green" mr={3} onClick={updateNote}>
                      Edit
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
            <Button
              onClick={() => {
                dispatch(deleteNotes(_id));
              }}
            >
              Delete
            </Button>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
}
