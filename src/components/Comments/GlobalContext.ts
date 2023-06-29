import { createContext, useContext } from 'react';

import { CommentsProps } from './props';

export const GlobalContext = createContext<CommentsProps>({});

export const useGlobalContext = () => useContext(GlobalContext);
