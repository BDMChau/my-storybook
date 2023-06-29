import size from 'lodash/size';

import { styled } from '@mui/material/styles';

import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import { Checkbox } from '@components/Checkbox';
import Chip from '@components/Chip';
import ListItemIcon from '@components/List/ListItemIcon';
import ListItemText from '@components/List/ListItemText';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';
import Paper from '@components/Paper';

const InputWrapper = styled('div')(
  ({ theme }) => `
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 8px;
  min-height: 40px;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

export default function CustomizedHook({
  disableCloseOnSelect,
  multiple,
}: {
  disableCloseOnSelect?: boolean;
  multiple?: boolean;
}) {
  const {
    getRootProps,
    // getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
    // anchorEl,
  } = useAutocomplete({
    defaultValue: multiple ? [top100Films[1]] : top100Films[1],
    multiple,
    options: top100Films,
    getOptionLabel: (option) => option.title,
    disableCloseOnSelect,
  });

  return (
    <div style={{ width: 300 }} {...getRootProps()}>
      <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
        {multiple &&
          (value as FilmOptionType[]).map((option: FilmOptionType, index: number) => (
            <Chip sx={{ m: 0.5 }} label={option.title} status='suspended' size='small' {...getTagProps({ index })} />
          ))}
        <input {...getInputProps()} />
      </InputWrapper>
      {!!size(groupedOptions) && (
        <Paper
          sx={{
            mt: 1,
            maxHeight: 350,
            overflowY: 'auto',
            overflowX: 'hidden',
            '::-webkit-scrollbar': {
              width: 5,
            },
            '::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: '#D1D5DB',
            },
          }}
        >
          <MenuList {...getListboxProps()}>
            {(top100Films as typeof top100Films).map((option, index) => (
              <MenuItem selected disabled={index % 3 === 0} {...getOptionProps({ option, index })}>
                <Checkbox style={{ paddingLeft: 0 }} checked />
                <ListItemText
                  sx={{
                    span: {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    },
                    overflow: 'hidden',
                  }}
                >
                  {option.title}
                </ListItemText>
                <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                  <CheckRoundedIcon color='secondary' />
                </ListItemIcon>
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      )}
    </div>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
];
