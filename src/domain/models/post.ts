export type Post = {
  fields: {
    resume: string;
    title: string;
    internalName: string;
    postContent: {
      content: Content[];
    };
  };
  sys: {
    createdAt: string;
  };
};

type Content = {
  content: {
    value: string;
  };
};
