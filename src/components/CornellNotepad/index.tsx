import {
  AddNoteSign,
  BottomSection,
  Container,
  MiddleDivider,
  MiddleSection,
  Note,
  Notes,
  Summary,
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
import { theme } from "../themes";
import { useDisclosure } from "@mantine/hooks";

const topicsData: TopicProps[] = [
  {
    id: "t1",
    value: "Suspendisse potenti.",
    color: theme.colors.random[0],
  },
  {
    id: "t2",
    value: "Vestibulum quis mattis felis.",
    color: theme.colors.random[1],
  },
];

const notesData: NoteProps[] = [
  {
    id: "n1",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPraesent placerat dapibus arcu. Sed eleifend metus quis purus vestibulum ultricies.\nVestibulum quis mattis felis.\nMaecenas tempor tortor nisl, ac convallis orci sodales ut.\nFusce nibh tellus, placerat at enim ac, viverra dapibus arcu.",
    idTopic: "t1",
  },
  {
    id: "n2",
    value:
      "Aenean in arcu nulla. In tempus, justo nec aliquet lacinia, vitae nisi ex a diam.\nEtiam at quam eu tellus fermentum maximus.\nProin et iaculis dui. Etiam quis facilisis purus.\nVestibulum a placerat sem. Donec nec pellentesque sapien.\nMorbi dignissim iaculis commodo.\nDonec sed eros in elit consectetur lacinia eu et risus.\nSed tempor feugiat mauris, vel auctor elit.",
    idTopic: "t2",
  },
  {
    id: "n3",
    value:
      "Suspendisse vitae sem mi.\nPhasellus venenatis tristique diam, non pretium purus vulputate sit amet.\nSuspendisse consectetur sodales ullamcorper. Sed ac quam justo.\nDuis nec tincidunt tellus, a ullamcorper felis.\nDonec pulvinar sapien justo. Mauris sed mi neque.",
    idTopic: "t1",
  },
];

const CornellNotepad = ({}: CornellNotepadProps) => {
  const notesRef = useRef();
  const [notes, setNotes] = useState<NoteProps[]>(notesData);
  const [topicsOpened, { open, close }] = useDisclosure(false);
  const [topics, setTopics] = useState<TopicProps[]>(topicsData);
  const [currentTopic, setCurrentTopic] = useState<string>(null);
  const [topicName, setTopicName] = useState<string>("");
  const [topicNotes, setTopicNotes] = useState<string[]>([]);
  const [topicColor, setTopicColor] = useState<string>(null);
  const [topicSpacings, setTopicSpacings] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    setTopicColor(getRandomColor());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      recalcTopicSpacings();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    recalcTopicSpacings();
  }, [notes, topics]);

  useEffect(() => {
    if (topicsOpened && !currentTopic) {
      setTopicColor(getRandomColor());
      setTopicName("");
      setTopicNotes([]);
    }
  }, [topicsOpened]);

  useEffect(() => {
    const newSpacings: Record<string, number> = {};
    topics.forEach((topic) => {
      newSpacings[topic.id] = calcTopicSpacing(topic);
    });
    setTopicSpacings(newSpacings);
  }, [notes, topics, window.innerWidth]);

  const recalcTopicSpacings = () => {
    const newSpacings: Record<string, number> = {};
    topics.forEach((topic) => {
      newSpacings[topic.id] = calcTopicSpacing(topic);
    });
    setTopicSpacings(newSpacings);
  };

  const getRandomColor = () =>
    theme.colors.random[
      Math.floor(Math.random() * (theme.colors.random.length - 2))
    ];

  const getTopicColor = (idTopic: string) =>
    topics.find((t) => t.id === idTopic).color;

  const handleNotesClick = (e: any) => {
    if (e.target.nodeName == "DIV") {
      const notesContainer: HTMLDivElement = notesRef?.current;
      if (notesContainer) {
        const textarea = document.createElement("textarea");
        textarea.rows = 1;
        textarea.style.height = calcTextareaHeight(" ") + "px";
        notesContainer.appendChild(textarea);
        textarea.focus();
        textarea.addEventListener("blur", () => {
          if (textarea.value) {
            const newN: NoteProps = {
              id: "n" + new Date().getTime().toString(),
              value: textarea.value,
              idTopic: null,
            };
            setNotes((prevNotes) => [...prevNotes, newN]);
          }
          notesContainer.removeChild(textarea);
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

  const calcTopicSpacing = (topic: TopicProps) => {
    const topicEl: HTMLDivElement = document.querySelector(
      `.topic#${topic?.id}`
    );
    const notesIds = notes
      ?.filter((n) => n.idTopic === topic?.id)
      ?.map((n) => n.id);
    let notesHeight = 0;
    const noteBorder = 4;
    const noteMargin = 8;
    notesIds.forEach((n) => {
      const noteEl = document.querySelector(`.note#${n}`);
      if (noteEl) {
        notesHeight += noteEl.clientHeight + noteBorder + noteMargin;
      }
    });
    return notesHeight <= topicEl?.scrollHeight
      ? 0
      : notesHeight - topicEl?.scrollHeight;
  };

  const handleUpdateTopics = () => {
    let auxTopicId = null;
    setTopics((prevTopics) => {
      if (currentTopic) {
        const currIndex = prevTopics.findIndex((pT) => pT.id === currentTopic);
        if (currIndex !== -1) {
          prevTopics[currIndex].value = topicName;
          prevTopics[currIndex].color = topicColor;
        }
        auxTopicId = currentTopic;
      } else {
        auxTopicId = "t" + new Date().getTime().toString();
        prevTopics.push({
          id: auxTopicId,
          value: topicName,
          color: topicColor,
        });
      }
      return prevTopics;
    });
    if (topicNotes) {
      if (currentTopic) {
        setNotes((prevNotes) =>
          prevNotes.map((pN) => {
            if (topicNotes.includes(pN.id)) {
              pN.idTopic = auxTopicId;
            } else if (pN.idTopic === auxTopicId) {
              pN.idTopic = null;
            }
            return pN;
          })
        );
      } else {
        setNotes((prevNotes) =>
          prevNotes.map((pN) => {
            if (topicNotes.includes(pN.id)) {
              pN.idTopic = auxTopicId;
            }
            return pN;
          })
        );
      }
    }
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
    setTopicNotes(
      notes?.filter((n) => n.idTopic === topic.id).map((n) => n.id)
    );
    open();
  };

  return (
    <Container>
      <MiddleSection>
        <Topics className="topics">
          {topics?.map((t) => {
            return (
              <Topic
                className="topic"
                key={t?.id}
                id={t?.id}
                color={t?.color}
                onClick={() => handleTopicClick(t)}
                style={{ marginBottom: (topicSpacings[t.id] || 8) + "px" }}
              >
                {t?.value}
              </Topic>
            );
          })}
          <Btn
            className={"new"}
            onClick={() => {
              setCurrentTopic(null);
              open();
            }}
            style={{ flexShrink: 0 }}
          >
            + Novo
          </Btn>
          <span style={{ minHeight: ".5rem", width: "100%", order: 100 }} />
        </Topics>
        <MiddleDivider />
        <Notes onClick={handleNotesClick} ref={notesRef}>
          {notes
            ?.sort((a, b) => {
              let idsTopics = topics.map((t) => t.id);
              return (
                (a.idTopic ? idsTopics.indexOf(a.idTopic) : Infinity) -
                (b.idTopic ? idsTopics.indexOf(b.idTopic) : Infinity)
              );
            })
            ?.map((n) => (
              <Note
                className="note"
                key={n?.id}
                id={n?.id}
                value={n?.value}
                onChange={onChangeNote}
                onBlur={onBlurNote}
                style={{ height: calcTextareaHeight(n?.value) + "px" }}
                color={n.idTopic ? getTopicColor(n.idTopic) : null}
              />
            ))}
          <AddNoteSign>Clique para adicionar uma nota</AddNoteSign>
        </Notes>
      </MiddleSection>
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
              size="xs"
              fullWidth
              withPicker={false}
              value={topicColor}
              onChange={setTopicColor}
              swatches={theme.colors.random.slice(0, -2)}
              swatchesPerRow={8}
            />
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <MultiSelect
              disabled={
                !notes?.filter((n) => !n.idTopic || n.idTopic === currentTopic)
                  ?.length
              }
              label={"Anotações"}
              value={topicNotes}
              onChange={setTopicNotes}
              data={notes
                ?.filter((n) => !n.idTopic || n.idTopic === currentTopic)
                ?.map((n) => ({
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
