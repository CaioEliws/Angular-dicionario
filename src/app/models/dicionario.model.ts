export interface Palavra {
  id?: string;
  dicionarioId: string;
  word: string;
  definition: string;
  definitionExtra: string;
}

export interface Dicionario {
  id: string;
  name: string;
}
