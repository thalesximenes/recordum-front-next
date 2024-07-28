export interface UserReducerState {
  usuario: Usuario;
  date: Date;
  loadingUsuario: boolean;
}

export interface Usuario {
  primeiroNome: string;
  sobrenome: string;
  email: string;
  escolaridade: string;
  vestibulares: string;
  curso: string;
  universidade: string;
}
