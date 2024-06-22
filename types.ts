type ProjectType = {
  id: string;
  name: string;
  about: string;
  imgUrl: string;
  websiteUrl: string;
  githubUrl: string;
  stack: StackElement[];
  notes: string;
};

type ClientType = {
  id: string;
  name: string;
  about: string;
  imgUrl: string;
  websiteUrl: string;
  stack: StackElement[];
};

type StackElement = string;

export type { ProjectType, ClientType, StackElement };
