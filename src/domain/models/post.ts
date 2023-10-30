export type Post = {
  fields: {
    resume: string;
    title: string;
    internalName: string;
    cover: {
      fields: {
        title: string;
        description: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    };
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
  }[];
};
