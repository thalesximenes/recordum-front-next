export interface ConteudoReducerState {
  eixos: Eixo[];
  idEixo: number;
  disciplinas: Disciplina[];
  idDisciplina: number;
  temas: Tema[];
  idAula: number;
  aula: Aula;
  mapasTextos: MapaTexto[];
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
  quantidade_aulas: number;
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
  duracao: number;
}

interface MapaTexto {
  id: number;
  texto: string;
  x: number;
  y: number;
  aula: number;
}
