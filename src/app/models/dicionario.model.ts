export interface Palavra {
  id?: number;
  dicionarioId: string;
  word: string;
  definition: string;
  definitionExtra?: string;
}

export interface Dicionario {
  id: string;
  name: string;
  words: Palavra[];
}
