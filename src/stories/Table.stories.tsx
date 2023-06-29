import { ComponentMeta, ComponentStory } from '@storybook/react';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import Chip from '@components/Chip';
import { Status } from '@components/Chip/props';
import Table from '@components/Table';
import { TableProps } from '@components/Table/props';

export default {
  title: 'Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

export const Demo: ComponentStory<typeof Table> = (args: TableProps) => <Table {...args} />;

function createData(firstName: string, lastName: string, email: string, roles: string, status: Status) {
  return { firstName, lastName, email, roles, status };
}

Demo.args = {
  emptyHeight: 300,
  isLoading: false,
  disablePagination: false,
  columns: [
    {
      key: 'firstName',
      header: 'First Name',
    },
    {
      key: 'lastName',
      header: 'Last Name',
    },
    {
      key: 'email',
      header: 'Email address',
    },
    {
      key: 'roles',
      header: 'Roles',
      width: 450,
    },
    {
      key: 'status',
      header: 'Status',
      renderCell: (value) => <Chip selected label={(value as Status).toUpperCase()} status={value as Status} />,
      width: 150,
    },
    {
      key: 'actions',
      header: '',
      renderCell: () => <MoreVertIcon />,
      width: 40,
    },
  ],
  rows: [
    createData('Nguyen Thi', 'Thu Hien 1', 'ntth_1@acb.com', 'role 1', 'active'),
    createData('Nguyen Thi', 'Thu Hien 2', 'ntth_2@acb.com', 'role 2', 'pending'),
    createData('Nguyen Thi', 'Thu Hien 3', 'ntth_3@acb.com', 'role 3', 'suspended'),
    createData('Nguyen Thi', 'Thu Hien 4', 'ntth_4@acb.com', 'role 1, role 3', 'locked'),
    createData(
      'Nguyen Thi',
      'Thu Hien 5',
      'ntth_5@acb.com',
      'User Manager, School Manager, Teacher, Course Manager',
      'choice'
    ),
  ],
};
