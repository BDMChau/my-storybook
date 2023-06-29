import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Comments from '@components/Comments';
import { Comment, CommentsProps, DataProps, _ID } from '@components/Comments/props';

export default {
  title: 'Comments',
  component: Comments,
  argTypes: {},
} as ComponentMeta<typeof Comments>;

const userInfo = {
  firstName: 'Le Dinh',
  lastName: 'Thuan Thuan Dinh Le',
  id: 445,
};

const data = [
  {
    id: '634680f6a89572a385587cd6',
    edited: false,
    message: '1 2 3 4 5 6 7 8 9 0 q w e r t y u i o p a s d f g h j k l z x c v b n m',
    createdAt: '2022-10-14T04:30:54.856Z',
    user: {
      firstName: "I'm",
      lastName: 'Impossible',
      id: 253,
    },
  },
  {
    id: '634680f6a89572a385587cd7',
    edited: false,
    message: 'This is a message.',
    createdAt: '2022-10-14T03:50:54.856Z',
    user: userInfo,
  },
  {
    id: '634680f6a89572a385587cd8',
    edited: false,
    message: 'Good job !!!',
    createdAt: '2022-10-14T03:50:54.856Z',
    user: {
      firstName: 'Demo',
      lastName: '2',
      id: 3453,
    },
  },
];

export const Demo: ComponentStory<typeof Comments> = (args: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>(data);

  const handleRemove = (id: _ID) => setComments((prev) => prev.filter(({ id: _id }) => _id !== id));

  const handleSubmit = (values: DataProps) => {
    if (values?.id) {
      setComments((prev) =>
        prev.map((cmt) => {
          if (cmt.id === values.id) {
            return {
              ...cmt,
              ...values,
              edited: true,
            };
          }

          return cmt;
        })
      );
    } else {
      setComments((prev) => {
        const _data = [...prev];

        _data.unshift({
          ...values,
          id: Math.random(),
          createdAt: '2022-10-14T03:50:54.856Z',
          user: userInfo,
          edited: false,
        });

        return _data;
      });
    }
  };

  return (
    <Comments
      {...args}
      required={false}
      label='Comments'
      currentUserId={445}
      comments={comments}
      onRemove={(id) => id && handleRemove(id)}
      onSubmit={(values) => values && handleSubmit(values)}
    />
  );
};

Demo.args = {};
