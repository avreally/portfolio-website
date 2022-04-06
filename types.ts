type ProjectType = {
  // key: string;
  id: string;
  name: string;
  about: string;
  imgUrl: string;
  websiteUrl: string;
  githubUrl: string;
  stack: StackElement[];
};

type StackElement = string;

export type { ProjectType, StackElement };
