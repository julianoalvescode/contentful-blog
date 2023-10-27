export type AboutMe = {
  metadata: {
    tags: [];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: 1;
    locale: "en-US";
  };
  fields: {
    description: {
      data: {};
      content: [
        {
          data: {};
          content: [
            {
              data: {};
              marks: [];
              value: string;
              nodeType: string;
            }
          ];
          nodeType: string;
        }
      ];
      nodeType: string;
    };
    title: string;
    avatar: {
      metadata: {
        tags: [];
      };
      sys: {
        space: {
          sys: {
            type: string;
            linkType: string;
            id: string;
          };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: string;
            linkType: string;
          };
        };
        revision: number;
        locale: string;
      };
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
  };
};
