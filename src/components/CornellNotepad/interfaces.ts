export interface CornellNotepadProps {
  notesData?: NoteProps[];
  topicsData?: TopicProps[];
}

export interface NoteProps {
  id: string;
  value: string;
  idTopic: string;
}

export interface TopicProps {
  id: string;
  value: string;
  color: string;
}
