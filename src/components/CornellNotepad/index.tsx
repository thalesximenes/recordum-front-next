import {
  BottomSection,
  Container,
  Notes,
  Summary,
  TopSection,
  Topics,
} from "./styles";
import { CornellNotepadProps, NoteProps } from "./interfaces";
import { useCallback, useRef, useState } from "react";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const CornellNotepad = ({}: CornellNotepadProps) => {
  const notesRef = useRef();
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [topicsOpened, { open, close }] = useDisclosure(true);

  const handleNotesClick = (e: any) => {
    if (e.target.nodeName == "DIV") {
      const notesContainer: HTMLDivElement = notesRef?.current;
      if (notesContainer) {
        const newN: NoteProps = {
          id: new Date().getTime().toString(),
          value: "",
          idTopic: null,
        };

        const cont = document.createElement("div");
        const textarea = document.createElement("textarea");
        textarea.rows = 1;
        textarea.style.height = calcTextareaHeight(" ") + "px";
        cont.appendChild(textarea);
        notesContainer.appendChild(cont);

        setNotes([...notes, newN]);

        textarea.focus();
        textarea.addEventListener("blur", () => removeNote(cont, newN.id));
        textarea.addEventListener("input", (e: Event) =>
          changeNote(e.target, newN.id)
        );
        textarea.addEventListener(
          "keyup",
          () =>
            (textarea.style.height = calcTextareaHeight(textarea.value) + "px")
        );
      }
    }
  };

  const removeNote = useCallback((element: HTMLElement, idNote: string) => {
    setNotes((prevNotes) => {
      const noteIndex = prevNotes.findIndex((n) => n.id === idNote);
      if (noteIndex !== -1 && !prevNotes[noteIndex].value) {
        const notesContainer: HTMLDivElement = notesRef?.current;
        if (notesContainer) notesContainer.removeChild(element);

        return prevNotes.filter((n) => n.id !== idNote);
      }
      return prevNotes;
    });
  }, []);

  const changeNote = useCallback(
    (textareaElement: EventTarget, idNote: string) => {
      setNotes((prevNotes) => {
        const noteIndex = prevNotes.findIndex((n) => n.id === idNote);
        if (noteIndex !== -1) {
          prevNotes[noteIndex].value = (
            textareaElement as HTMLTextAreaElement
          )?.value;
        }
        return prevNotes;
      });
    },
    []
  );

  const calcTextareaHeight = (value) => {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    let newHeight = 20 + numberOfLineBreaks * 20 + 10;
    return newHeight;
  };

  return (
    <Container>
      <TopSection>
        <Topics onClick={open}>topics</Topics>
        <Notes onClick={handleNotesClick} ref={notesRef}>
          notes
        </Notes>
      </TopSection>
      <BottomSection>
        <Summary>summary</Summary>
      </BottomSection>
      <Modal opened={topicsOpened} onClose={close}></Modal>
    </Container>
  );
};

export default CornellNotepad;
