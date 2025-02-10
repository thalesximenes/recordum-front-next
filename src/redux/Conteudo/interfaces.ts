export interface ConteudoReducerState {
  eixos: Eixo[];
  idEixo: number;
  disciplinas: Disciplina[];
  idDisciplina: number;
  temas: Tema[];
  idAula: number;
  aula: Aula;
  loading: boolean;
}

interface Eixo {
  id: number;
  nome: string;
}

interface Disciplina {
  id: number;
  nome: string;
  thumb: string;
  eixo: number;
}

interface Tema {
  id: number;
  aulas: Aula[];
  tema: string;
  disciplina: number;
}

interface Aula {
  id: number;
  nome: string;
  aula: string;
  mapa: string;
}
