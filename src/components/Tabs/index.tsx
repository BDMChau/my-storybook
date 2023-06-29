import { useMemo, useState } from 'react';

import size from 'lodash/size';

import Box from '@components/Box';

import { TabPanelProps, TabsProps } from './props';
import { StyledTab, StyledTabs, TabsGroup } from './styles';

const TabPanel = ({ children, hidden, index }: TabPanelProps) => {
  if (hidden) return null;

  return (
    <Box role='tabPanel' id={`tabPanel-${index}`} aria-labelledby={`tab-${index}`} sx={{ py: 2 }}>
      {children}
    </Box>
  );
};

export default ({
  tabs,
  defaultTab = 0,
  orientation,
  height,
  width,
  divider,
  oval,
  handleChangeTab = () => {},
  ...rest
}: TabsProps) => {
  const [value, setValue] = useState<number>(defaultTab);

  if (!tabs || !size(tabs)) return null;

  // To Do: Mode Vertical and Horizontal (WIP: Vertical)
  const getStyle = useMemo(() => {
    if (orientation === 'vertical') return { flexGrow: 1, display: 'flex', height: height || '100%' };

    return { width: width || '100%' };
  }, [orientation, height, width]);

  useMemo(() => {
    defaultTab !== value && setValue(defaultTab);
  }, [defaultTab]);

  const renderTabs = useMemo(() => {
    const _tabs = (
      <StyledTabs
        aria-label='Tabs'
        value={value}
        oval={oval}
        orientation={orientation}
        TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
        onChange={(e: React.SyntheticEvent, newValue: number) => {
          setValue(newValue);
        }}
        {...rest}
      >
        {tabs.map(({ key, ...tRest }, index) => (
          <StyledTab
            id={`tab-${index}`}
            key={`tab-${index}`}
            aria-controls={`tabPanel-${index}`}
            onClick={() => handleChangeTab({ key, tabIndex: index })}
            {...tRest}
          />
        ))}
      </StyledTabs>
    );

    if (divider)
      return (
        <TabsGroup>
          {divider && <Box className='Divider' />}
          {_tabs}
        </TabsGroup>
      );

    return _tabs;
  }, [divider, tabs, orientation, value]);

  return (
    <Box sx={getStyle}>
      {/* Render Tabs */}
      {renderTabs}
      {/* Render Tab Content */}
      {tabs.map(({ content }, index) => (
        <TabPanel key={`tabPanel-${index}`} index={index} hidden={value !== index}>
          {content}
        </TabPanel>
      ))}
    </Box>
  );
};
