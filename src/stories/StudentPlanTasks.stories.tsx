import { ComponentMeta, ComponentStory } from '@storybook/react';

import StudentTasks from '@components/StudentTasks';
import { StudentTasksProps } from '@components/StudentTasks/props';

export default {
  title: 'Student plan Tasks',
  component: StudentTasks,
  argTypes: {},
} as ComponentMeta<typeof StudentTasks>;

export const Demo: ComponentStory<typeof StudentTasks> = (args: StudentTasksProps) => <StudentTasks {...args} />;

Demo.args = {
  maxHeight: 480,
  loading: false,
  title: "Today's schoolwork",
  disableSelectTab: true,
  isSchoolPlan: true,
  emptyContent: { imgType: 'planned' },
  data: [
    {
      planId: 1,
      title: 'Must do in study hall',
      disabledCollapse: true,
      data: [
        ...(Math.floor(Math.random() * 2) > 0
          ? Array.from({ length: 2 }).map((_, index) => ({
              id: index,
              title: `Assignment ${index + 1}`,
              subTitle: `Course ${index + 1}`,
              isStudyHall: true,
              estimateTime: {
                isAlert: true,
                dateTime: `Today - ${new Date().toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}`,
              },
              isHiddenFooter: true,
            }))
          : []),
      ],
    },
    {
      planId: 2,
      title: 'Must do today',
      doneTotal: 2,
      taskDoneText: 'Tasks done',
      planHours: '2 hours 37 minutes',
      planHoursText: 'hours planned',
      disabledCollapse: true,
      data: [
        ...(Math.floor(Math.random() * 2) > 0
          ? Array.from({ length: 2 }).map((_, index) => ({
              id: index,
              title: `Assignment ${index + 1}`,
              subTitle: `Course ${index + 1}`,
              isHiddenFooter: true,
              planTaskStatus: Math.floor(Math.random() * 2) > 0 ? 1 : 2,
              estimateTime: {
                isAlert: true,
                dateTime: `Tomorrow - ${new Date().toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}`,
              },
            }))
          : []),
      ],
    },
    {
      planId: 3,
      title: 'Should do in advance',
      doneTotal: 2,
      taskDoneText: 'Tasks done',
      disabledCollapse: true,
      data: [
        ...(Math.floor(Math.random() * 2) > 0
          ? Array.from({ length: 2 }).map((_, index) => ({
              id: index,
              title: `Assignment ${index + 1}`,
              subTitle: `Course ${index + 1}`,
              isHiddenFooter: true,
              planTaskStatus: Math.floor(Math.random() * 2) > 0 ? 1 : 2,
              estimateTime: {
                isAlert: false,
                dateTime: `Monday, Dec 12 - ${new Date().toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}`,
              },
            }))
          : []),
      ],
    },
  ],
};
