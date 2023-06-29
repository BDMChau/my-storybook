import { useMemo, useState } from 'react';

import size from 'lodash/size';

import Box from '@components/Box';
import CustomScrollbar from '@components/CustomScrollbar';
import Paper from '@components/Paper';

import Comment from './components/Comment';
import Confirm from './components/Confirm';
import InputComment from './components/InputComment';
import { MAX } from './constants';
import { GlobalContext } from './GlobalContext';
import { CommentsProps, _ID } from './props';

export default ({ comments, loading, enableScroll, maxHeightScroll, className, ...rest }: CommentsProps) => {
  const [selected, setSelected] = useState<_ID | undefined>();

  const renderComments = useMemo(() => {
    if (!size(comments)) return null;

    const listCmt = comments?.map((values) => (
      <Comment key={values.id} {...values} loading={loading} onRemove={(id) => setSelected(id)} />
    ));

    if (enableScroll)
      return <CustomScrollbar maxHeightScroll={maxHeightScroll || MAX.HEIGHT_LIST_COMMENT}>{listCmt}</CustomScrollbar>;

    return listCmt;
  }, [comments, enableScroll, loading, maxHeightScroll]);

  return (
    <GlobalContext.Provider value={{ ...rest }}>
      <Confirm id={selected} loading={loading} onClose={() => setSelected(undefined)} />
      <Paper className={className} sx={{ padding: 0.5 }} elevation={0}>
        <InputComment loading={loading} />
        <Box mt={3}>{renderComments}</Box>
      </Paper>
    </GlobalContext.Provider>
  );
};
