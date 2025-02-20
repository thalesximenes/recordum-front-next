import {
  BottomSection,
  Container,
  Note,
  Notes,
  Summary,
  TopSection,
  Topic,
  TopicPreview,
  Topics,
} from "./styles";
import { ColorPicker, Modal, MultiSelect } from "@mantine/core";
import { CornellNotepadProps, NoteProps, TopicProps } from "./interfaces";
import { Row, RowItem } from "../Row";
import { SyntheticEvent, useEffect, useRef, useState } from "react";

import Btn from "../Btn";
import TextInput from "../TextInput";
import { useDisclosure } from "@mantine/hooks";

const CornellNotepad = ({}: CornellNotepadProps) => {
  const notesRef = useRef();
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [topicsOpened, { open, close }] = useDisclosure(false);
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

  useEffect(() => {
    console.log(topics);
  }, [topics]);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  const getRandomColor = () =>
    "#" +
    Math.floor(Math.random() * 2 ** 24)
      .toString(16)
      .padStart(6, "0");

  const handleNotesClick = (e: any) => {
    if (e.target.nodeName == "DIV") {
      const notesContainer: HTMLDivElement = notesRef?.current;
      if (notesContainer) {
        const cont = document.createElement("div");
        const textarea = document.createElement("textarea");
        textarea.rows = 1;
        textarea.style.height = calcTextareaHeight(" ") + "px";
        cont.appendChild(textarea);
        notesContainer.appendChild(cont);
        textarea.focus();
        textarea.addEventListener("blur", () => {
          if (textarea.value) {
            const newN: NoteProps = {
              id: new Date().getTime().toString(),
              value: textarea.value,
              idTopic: null,
            };
            setNotes((prevNotes) => [...prevNotes, newN]);
          }
          notesContainer.removeChild(cont);
        });
        textarea.addEventListener(
          "input",
          () =>
            (textarea.style.height = calcTextareaHeight(textarea.value) + "px")
        );
      }
    }
  };

  const onChangeNote = (e: SyntheticEvent) => {
    const textareaEl = e.target as HTMLTextAreaElement;
    if (textareaEl) {
      const id = textareaEl.getAttribute("id");
      setNotes((prevNotes) =>
        prevNotes.map((pN) =>
          pN.id === id ? { ...pN, value: textareaEl.value } : pN
        )
      );
    }
  };

  const onBlurNote = (e: SyntheticEvent) => {
    const textareaEl = e.target as HTMLTextAreaElement;
    if (textareaEl && textareaEl?.value?.trim() === "") {
      const id = textareaEl.getAttribute("id");
      setNotes((prevNotes) => prevNotes?.filter((pN) => pN.id !== id));
    }
  };

  const calcTextareaHeight = (value) => {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    let newHeight = 20 + numberOfLineBreaks * 20 + 10 + 8;
    return newHeight;
  };

  const handleUpdateTopics = () => {
    setTopics((prevTopics) => {
      if (currentTopic) {
        const currIndex = prevTopics.findIndex((pT) => pT.id === currentTopic);
        if (currIndex !== -1) {
          prevTopics[currIndex].value = topicName;
          prevTopics[currIndex].color = topicColor;
        }
      } else {
        prevTopics.push({
          id: new Date().getTime().toString(),
          value: topicName,
          color: topicColor,
        });
      }
      return prevTopics;
    });
    close();
  };

  const handleDeleteTopic = () => {
    setTopics((prevTopics) => {
      const topicIndex = prevTopics.findIndex((n) => n.id === currentTopic);
      if (topicIndex !== -1) {
        return prevTopics.filter((n) => n.id !== currentTopic);
      }
      return prevTopics;
    });
    close();
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
            className={"new"}
            onClick={() => {
              setCurrentTopic(null);
              open();
            }}
          >
            + Novo tópico
          </Topic>
        </Topics>
        <Notes onClick={handleNotesClick} ref={notesRef}>
          {notes?.map((n) => (
            <Note
              key={n?.id}
              id={n?.id}
              value={n?.value}
              onChange={onChangeNote}
              onBlur={onBlurNote}
              style={{ height: calcTextareaHeight(n?.value) + "px" }}
            />
          ))}
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
          {currentTopic && (
            <Btn template="secondary" onClick={handleDeleteTopic}>
              Excluir
            </Btn>
          )}
          <Btn onClick={close}>Cancelar</Btn>
        </Row>
      </Modal>
    </Container>
  );
};

export default CornellNotepad;
