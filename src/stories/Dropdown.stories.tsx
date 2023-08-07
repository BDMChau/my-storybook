import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dropdown from '@components/Dropdown';
import { DropdownProps, option, selectedOption } from '@components/Dropdown/props';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const data: option[] = [
  { value: 'Value 1', label: 'MC RECAC', email: 'bdmchau1105@gmail.com' },
  { value: 'Value 2', label: 'Value 2', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/800px-Sunflower_from_Silesia2.jpg?20091008132228', email: 'bdmchau110005@gmail.com' },
  { value: 'Value 3', label: 'Value 3', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/800px-Sunflower_from_Silesia2.jpg?20091008132228', email: 'bdmchau15@gmail.com' },
  { value: 'Value 4', label: 'Value 4', renderOptionLabel: () => 'Label 4' },
  { value: 'Value 5', label: 'Value 5' },
  { value: 'Value 6', label: 'Value 6', renderOptionLabel: () => 'Label 6' },
  { value: 'Value 7', label: 'Value 7' },
  { value: 'Value 8', label: 'Value 8', disabled: true },
  { value: 'Value 9', label: 'Value 9' },
  { value: 'Value 10', label: 'Value 10', disabled: true },
];

export const Demo: ComponentStory<typeof Dropdown> = (args: DropdownProps) => {
  const [selected, setSelected] = useState<selectedOption>(args.multiple ? [] : null);

  return (
    <>
      <Dropdown {...args} value={selected} onChange={(values: selectedOption) => setSelected(values)} />
    </>
  );
};

Demo.args = {
  label: 'Dropdown Label',
  width: '50%',
  limitTags: 1,
  options: data,
  multiple: false,
  disabled: false,
  loading: false,
  required: false,
  disableCloseOnSelect: true,
  disableFilter: false,
  loadingText: <div>Loading ...</div>,
  noOptionsText: <div>No options</div>,
  helperText: 'asdasd',
  error: true,
  isUserTags: false,
  filterOptions: (options, state) => {
    const inputValue: string = state.inputValue.trim();
    const checkIncludes = (textCheck: string, textInput: string) => textCheck.toLowerCase().includes(textInput.toLowerCase());

    return (options || []).filter((item) => {
      if (!item) { return false; }

      return item.email ? (checkIncludes(item.label, inputValue) || checkIncludes(item.email, inputValue)) : checkIncludes(item.label, inputValue);
    });
  }
};
