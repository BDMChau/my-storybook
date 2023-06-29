import { createContext, useContext } from 'react';

import { StudentTasksProps } from './props';

export const GlobalContext = createContext<StudentTasksProps>({});

export const useGlobalContext = () => useContext(GlobalContext);
