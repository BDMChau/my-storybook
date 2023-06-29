import { memo, useMemo } from 'react';

import Box from '@components/Box';
import Tabs from '@components/Tabs';
import Typography from '@components/Typography';

import CardList from './Components/CardList';
import { Tabs as _Tabs } from './constants';
import { GlobalContext } from './GlobalContext';
import { DataByTabProps, GroupDataProps, StudentTasksProps, TypeofTabs } from './props';

export default memo(
  ({
    title,
    data,
    loading,
    spacing,
    className,
    labelMapping,
    maxHeight,
    emptyContent,
    variantTitle,
    disableSelectTab,
    customCardFooter,
    onClickCard,
    onClickMenu,
    onClickSchedule,
    onClickTab = () => {},
    defaultTab = 0,
    isSchoolPlan = false,
  }: StudentTasksProps) => {
    const tabList = useMemo(() => Object.keys(_Tabs), []);

    return (
      <GlobalContext.Provider
        value={{
          labelMapping,
          maxHeight,
          emptyContent,
          loading,
          isSchoolPlan,
          customCardFooter,
          onClickCard,
          onClickMenu,
          onClickSchedule,
        }}
      >
        <Box className={className} {...spacing}>
          <Typography component='div' variant={variantTitle || 'headingSmall'} sx={{ mb: 2 }}>
            {title}
          </Typography>
          {!disableSelectTab ? (
            <Tabs
              divider
              handleChangeTab={(tab) => onClickTab(tab)}
              defaultTab={defaultTab}
              tabs={tabList.map((tab) => {
                const _tab = tab as TypeofTabs;

                return {
                  key: tab,
                  label: labelMapping?.[_tab] ?? _Tabs[_tab],
                  content: <CardList data={(data as DataByTabProps)?.[_tab] ?? (data as GroupDataProps[])} />,
                };
              })}
            />
          ) : (
            <CardList data={data as GroupDataProps[]} />
          )}
        </Box>
      </GlobalContext.Provider>
    );
  }
);
