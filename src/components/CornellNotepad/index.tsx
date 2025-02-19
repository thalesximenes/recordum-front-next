import {
  BottomSection,
  Container,
  Notes,
  Summary,
  TopSection,
  Topic,
  TopicPreview,
  Topics,
} from "./styles";
import {
  ColorInput,
  ColorPicker,
  Modal,
  MultiSelect,
  rgba,
} from "@mantine/core";
import { CornellNotepadProps, NoteProps, TopicProps } from "./interfaces";
import { Row, RowItem } from "../Row";
import { useCallback, useEffect, useRef, useState } from "react";

import Btn from "../Btn";
import TextInput from "../TextInput";
import { useDisclosure } from "@mantine/hooks";

const CornellNotepad = ({}: CornellNotepadProps) => {
  const notesRef = useRef();
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [topicsOpened, { open, close }] = useDisclosure(true);
  const [topics, setTopics] = useState<TopicProps[]>([]);
  const [currentTopic, setCurrentTopic] = useState<string>(null);
  const [topicName, setTopicName] = useState<string>("");
  const [topicNotes, setTopicNotes] = useState<string[]>([]);
  const [topicColor, setTopicColor] = useState<string>(null);

  useEffect(() => {
    setTopicColor(getRandomColor());
  }, []);

  useEffect(() => {
    if (topicsOpened && !currentTopic) {
      setTopicColor(getRandomColor());
      setTopicName("");
      setTopicNotes([]);
    }
  }, [topicsOpened]);

  // useEffect(() => {
  //   console.log(topicColor);
  // }, [topicColor]);

  const getRandomColor = () =>
    "#" +
    Math.floor(Math.random() * 2 ** 24)
      .toString(16)
      .padStart(6, "0");

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

  const handleUpdateTopics = () => {
    if (currentTopic) {
      setTopics((prevTopics) => {
        const currIndex = prevTopics.findIndex((pT) => pT.id === currentTopic);
        if (currIndex !== -1) {
          prevTopics[currIndex].value = topicName;
          prevTopics[currIndex].color = topicColor;
        }
        return prevTopics;
      });
      close();
    } else {
      setTopics((prevTopics) => {
        prevTopics.push({
          id: new Date().getTime().toString(),
          value: topicName,
          color: topicColor,
        });
        return prevTopics;
      });
      close();
    }
  };

  const handleTopicClick = (topic: TopicProps) => {
    setCurrentTopic(topic?.id);
    setTopicName(topic?.value);
    setTopicColor(topic?.color);
    open();
  };

  return (
    <Container>
      <TopSection>
        <Topics>
          topics
          {topics?.map((t) => (
            <Topic
              key={t?.id}
              color={t?.color}
              onClick={() => handleTopicClick(t)}
            >
              {t?.value}
            </Topic>
          ))}
          <Topic
            color={rgba("255, 255, 255", 0.5)}
            onClick={() => {
              setCurrentTopic(null);
              open();
            }}
          >
            + Novo tópico
          </Topic>
        </Topics>
        <Notes onClick={handleNotesClick} ref={notesRef}>
          notes
        </Notes>
      </TopSection>
      <BottomSection>
        <Summary>summary</Summary>
      </BottomSection>
      <Modal
        opened={topicsOpened}
        onClose={close}
        title={currentTopic ? "EDITAR TÓPICO" : "CRIAR NOVO TÓPICO"}
      >
        <Row>
          <RowItem>
            <TextInput
              placeholder="Nome do tópico"
              value={topicName}
              setValue={setTopicName}
            />
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <TopicPreview>
              <label>Prévia</label>
              <Topic color={topicColor}>{topicName || "Nome do tópico"}</Topic>
            </TopicPreview>
          </RowItem>
        </Row>
        <Row>
          <RowItem center>
            <ColorPicker
              size="sm"
              fullWidth
              value={topicColor}
              onChange={setTopicColor}
            />
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <MultiSelect
              disabled={!notes?.length}
              label={"Anotações"}
              data={notes
                ?.filter((n) => !n.idTopic || n.idTopic === currentTopic)
                .map((n) => ({
                  label: n?.value,
                  value: n?.id,
                }))}
            />
          </RowItem>
        </Row>
        <Row>
          <Btn
            template="primary"
            disabled={!topicName}
            onClick={handleUpdateTopics}
          >
            {currentTopic ? "Editar" : "Criar"}
          </Btn>
          {currentTopic && <Btn template="secondary">Excluir</Btn>}
          <Btn onClick={close}>Cancelar</Btn>
        </Row>
      </Modal>
    </Container>
  );
};

export default CornellNotepad;
