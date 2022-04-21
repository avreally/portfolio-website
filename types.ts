type ProjectType = {
  // key: string;
  id: string;
  name: string;
  about: string;
  imgUrl: string;
  websiteUrl: string;
  githubUrl: string;
  stack: StackElement[];
  notes: string;
};

type StackElement = string;

export type { ProjectType, StackElement };
