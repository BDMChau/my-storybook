import { useState, useRef, useEffect } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import isNaN from 'lodash/isNaN';
import range from 'lodash/range';
import set from 'lodash/set';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import GroupTable from '@components/GroupTable';
import { PROGRESS_STATUS } from '@components/GroupTable/constants';
import { ColumnProps } from '@components/GroupTable/props';
import IconButton from '@components/IconButton';

export default {
  title: 'GroupTable',
  component: GroupTable,
} as ComponentMeta<typeof GroupTable>;

export const Demo: ComponentStory<typeof GroupTable> = () => {
  const [backgroundColor, setbackGroundColor] = useState('');
  const [data, setData] = useState<Record<string, unknown>[]>(
    range(1, 5).map((idx) => ({
      id: idx,
      name: `Student ${idx}`,
      overall: 1,
      overallLetter: Math.floor(Math.random() * 4) % 2 === 0 ? 'A' : 'B',
      attendance: null,
      participation: null,
      assignment_1: {
        value: 54,
        status: 0,
        originalGrade: 90,
        overallGrade: 40,
      },
      assignment_3: {
        value: idx % 2 ? 2 : null,
        status: 0,
      },
      assignment_2: {
        value: idx % 4 === 0 ? idx : '',
        status: idx % 2 === 0 ? PROGRESS_STATUS.LATE_TURN_IN : idx % 3 === 0 ? PROGRESS_STATUS.TURN_IN : null,
      },
      // homework_1: idx,
      // homework_2: '',
      // homework_3: idx,
    }))
  );

  useEffect(() => {
    const elem = document.getElementById('white-wrapper');
    const theCSSprop = elem ? window.getComputedStyle(elem, null).getPropertyValue('background-color') : '';

    theCSSprop && setbackGroundColor(theCSSprop);
  }, []);

  const columns: ColumnProps[] = [
    {
      header: '',
      isHidden: false,
      colSpan: 3,
      isBlankSpace: true,
      columns: [
        {
          header: 'Student Name',
          accessor: 'name',
          variant: 'labelLarge',
          enableSort: ['name'],
          inputType: 'text',
          borderRadiusTop: true,
          rowSpan: 2,
          width: 200,
          endAdornment: (value) => (
            <IconButton onClick={() => alert(`Don't touch my babe ${JSON.stringify(value)}`)}>
              <DescriptionOutlinedIcon />
            </IconButton>
          ),
        },
        {
          header: 'Overall Grade',
          variant: 'labelLarge',
          borderRadiusTop: true,
          rowSpan: 2,
          colSpan: 2,
          columns: [
            {
              accessor: 'overall',
              width: 80,
              disabledEdit: true,
              inputType: 'text',
              alignData: 'center',
              renderCell: ({ value }) => (value ? `${JSON.stringify(value)}%` : ''),
            },
            {
              accessor: 'overallLetter',
              width: 80,
              inputType: 'text',
              disabledEdit: true,
              alignData: 'center',
            },
          ],
        },
      ],
    },
    {
      header:
        'Attendancerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
      borderRadiusTop: true,
      groupHeader: true,
      headerWeight: '10%',
      maxWidth: 200,
      deltaWidth: 100,
      isShowTooltip: true,
      columns: [
        {
          header: '%',
          accessor: 'attendance',
          inputType: 'number',
          rowSpan: 2,
          width: 120,
        },
      ],
    },
    {
      header: 'Participation',
      borderRadiusTop: true,
      groupHeader: true,
      headerWeight: '10%',
      columns: [
        {
          header: '%',
          accessor: 'participation',
          inputType: 'number',
          rowSpan: 2,
        },
      ],
    },
    {
      header:
        'Assignment544444444444444444444444444444444444444444444444444444444444444444444444777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777',
      borderRadiusTop: true,
      groupHeader: true,
      colSpan: 3,
      maxWidth: 400,
      isShowTooltip: true,
      headerWeight: '20%',
      columns: [
        {
          header: 'Assignment 1 2 3 4 5 6 7 8 9 ',
          variant: 'labelLarge',
          maxWidth: 200,
          deltaWidth: 20,
          isShowTooltip: true,
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'assignment_1.value',
              status: 'assignment_1.status',
              inputType: 'number',
              numberProps: {
                max: 100,
                min: 0,
                decimalScale: 2,
                thousandSeparator: true,
              },
              isHoverShowAdornment: true,
              endAdornment: (value) => (
                <IconButton onClick={() => alert(`Don't touch my babe ${JSON.stringify(value)}`)}>
                  <DescriptionOutlinedIcon />
                </IconButton>
              ),
            },
          ],
        },
        {
          header: 'Assignment testttttttttttttttttttttttttttttttttttttttttttttttttttttt',
          variant: 'labelLarge',
          maxWidth: 200,
          deltaWidth: 20,
          disabled: true,
          isShowTooltip: true,
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'assignment_3.value',
              status: 'assignment_3.status',
              inputType: 'number',
              numberProps: {
                max: 100,
                min: 0,
                decimalScale: 2,
                thousandSeparator: true,
              },
              isHoverShowAdornment: true,
              endAdornment: (value) => (
                <IconButton onClick={() => alert(`Don't touch my babe ${JSON.stringify(value)}`)}>
                  <DescriptionOutlinedIcon />
                </IconButton>
              ),
            },
          ],
        },
        {
          header: 'Assignment 2',
          variant: 'labelLarge',
          isShowTooltip: true,
          maxWidth: 200,
          deltaWidth: 20,
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'assignment_2.value',
              status: 'assignment_2.status',
              inputType: 'number',
              numberProps: {
                max: 100,
                min: 0,
                decimalScale: 2,
                thousandSeparator: true,
              },
              isHoverShowAdornment: true,
              width: 200,
              hiddenSelectStatus: false,
              validStatusOption: [PROGRESS_STATUS.TURN_IN, PROGRESS_STATUS.LATE_TURN_IN],
              // mappingOption: {
              //   [PROGRESS_STATUS.LATE_TURN_IN]: {
              //     disabledMessage: 'aho aho aho',
              //     isDisabledOption: () => false,
              //   },
              //   [PROGRESS_STATUS.TURN_IN]: {
              //     label: 'PROGRESS STATUS TURN_IN =.=',
              //     disabledMessage: 'ahoooooooooooo',
              //     isDisabledOption: () => false,
              //   },
              // },
              endAdornment: (value) => (
                <IconButton onClick={() => alert(`Don't touch my babe ${JSON.stringify(value)}`)}>
                  <DescriptionOutlinedIcon />
                </IconButton>
              ),
            },
          ],
        },
      ],
    },
    {
      header: 'Homework',
      borderRadiusTop: true,
      groupHeader: true,
      colSpan: 2,
      headerWeight: '20%',
      columns: [
        {
          header: 'Homework 133333333333333333333',
          variant: 'labelLarge',
          maxWidth: 200,
          deltaWidth: 20,
          isShowTooltip: true,
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'homework_1',
              inputType: 'number',
            },
          ],
        },
        {
          header: 'Homework 2',
          variant: 'labelLarge',
          maxWidth: 200,
          deltaWidth: 20,
          isShowTooltip: true,
          columns: [
            {
              header: 'pt. out of 100',
              accessor: 'homework_2',
              inputType: 'number',
            },
          ],
        },
      ],
    },
  ];

  const handleBlurCell = ({ accessor, rowInfo, value }: any) => {
    if (!isNaN(value) && value !== rowInfo?.value)
      setData((prevData: Record<string, any>[]) =>
        prevData.map((_data: Record<string, any>) => {
          if (_data?.id === rowInfo?.id) {
            return set(_data, accessor, value);
          }

          return _data;
        })
      );
  };

  return (
    <div id='white-wrapper' style={{ backgroundColor: 'white' }}>
      <GroupTable
        columns={columns}
        rows={data}
        handleBlurCell={handleBlurCell}
        blankSpaceColor={backgroundColor}
        backgroundColor={''}
      />
    </div>
  );
};
