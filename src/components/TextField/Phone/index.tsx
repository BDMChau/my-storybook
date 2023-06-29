import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

import get from 'lodash/get';
import size from 'lodash/size';
import sortBy from 'lodash/sortBy';

import { SxProps, Theme } from '@mui/material/styles';

import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import Box from '@components/Box';
import Divider from '@components/Divider';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';
import Popover from '@components/Popover';
import Typography from '@components/Typography';

import parsePhoneNumber, { AsYouType } from 'libphonenumber-js';

import { DEFAULTS } from '../constant';
import { CountryCode, TextFieldProps } from '../props';
import PhoneNumber from '../Text';

import Countries from './country/phone_numbers.json';

interface PhoneProps {
  code: CountryCode;
  dial_code: string;
}

export default ({ value = '', defaultCountry, inputProps, onChange, ...rest }: TextFieldProps) => {
  const _country = defaultCountry || DEFAULTS.COUNTRY;
  const enableAreaCodes = inputProps?.enableAreaCodes;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selected, setSelected] = useState<PhoneProps>({
    code: _country,
    dial_code: Countries?.[_country]?.dial_code,
  });

  const asYouType = new AsYouType(selected.code);

  useEffect(() => {
    const parsePhone = parsePhoneNumber(value as string);
    const country = parsePhone?.country as CountryCode;

    if (country) {
      setSelected({
        code: country,
        dial_code: Countries?.[country]?.dial_code,
      });
    }
  }, []);

  const handleChangeValue = useCallback((phone) => onChange && onChange(phone), []);

  const renderTextItem = useCallback(
    (pl: number, pr: number, text?: string, sx?: SxProps<Theme>) =>
      text && (
        <Typography variant='body2' pl={pl} pr={pr} sx={sx}>
          {text}
        </Typography>
      ),
    []
  );

  const renderFlag = useCallback(
    (code: string) => (
      <img loading='lazy' width='16.67px' alt={code} src={require(`./country/${code.trim().toLowerCase()}.png`)} />
    ),
    []
  );

  const handleSelectFormat = useCallback((code: CountryCode, dial_code: string, area: string) => {
    handleChangeValue({ target: { value: area } } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
    setSelected({ code, dial_code });
    setAnchorEl(null);
  }, []);

  const renderCountryList = useMemo(() => {
    const open = Boolean(anchorEl);
    const data: Record<string, string>[] = [];

    Object.keys(Countries).forEach((code) => {
      const { name, dial_code, area_codes }: Record<string, any> = get(Countries, code, {});
      const defaultValue = { code, name, dial_code };

      if (enableAreaCodes && size(area_codes)) {
        data.push(
          ...area_codes.map((area: string) => ({
            ...defaultValue,
            area,
          }))
        );
      }
      data.push(defaultValue);
    });

    return (
      <Popover
        id={open ? 'countries-popover' : undefined}
        open={open}
        anchorEl={anchorEl}
        elevation={1}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        sx={{ marginTop: 1, maxHeight: '250px !important' }}
      >
        <MenuList>
          {sortBy(data, ['code', 'area'], ['asc']).map(({ code, name, dial_code, area }, idx) => (
            <MenuItem
              key={`${code}-${idx}`}
              onClick={() => handleSelectFormat(code as CountryCode, dial_code, area || '')}
            >
              {renderFlag(code)}
              {renderTextItem(1.5, 0.5, name)}
              {renderTextItem(0.5, 0.25, dial_code)}
              {renderTextItem(0.5, 0.5, area, { color: (theme: Record<string, any>) => theme.newColors.gray[400] })}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    );
  }, [anchorEl, enableAreaCodes]);

  const renderValue = () => {
    const _val = value as string;
    const parseValue = parsePhoneNumber(_val, selected.code)?.formatNational();

    if (parseValue) return parseValue;

    return _val.replace(selected.dial_code, '');
  };

  // const _asYouType = new AsYouType(selected.code);

  // console.log('===format===', _asYouType.input(_val.replace(selected.dial_code, '')));

  // const temp = async () => {
  //   const _a = '+121345678';

  //   return await import('libphonenumber-js').then(({ AsYouType }) => {
  //     const _asYouType = new AsYouType(selected.code);

  //     _asYouType.input(_a);

  //     return _asYouType;
  //   });
  // };

  // console.log('====: ', temp());

  return (
    <>
      <PhoneNumber
        value={renderValue()}
        onChange={({ target }) => {
          const _val = target?.value?.replace(/(?!-)[^0-9.]/g, '');

          asYouType.input(_val as string);
          handleChangeValue({ target: { value: asYouType.getNumber()?.number } });
        }}
        startAdornment={
          <>
            {renderCountryList}
            <Box
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              onClick={(event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}
            >
              <Box height={25}>{renderFlag(selected.code)}</Box>
              <Box height={23} ml={0.5}>
                <ArrowDownIcon fontSize='small' />
              </Box>
            </Box>
            <Divider sx={{ height: 24, ml: 0.5, mt: 1, mb: 1, mr: 1 }} orientation='vertical' />
            <Typography
              variant='bodyLarge'
              sx={{
                color: (theme: Record<string, any>) => theme.newColors.gray[400],
              }}
            >
              {`${selected?.dial_code ?? ''}`}
            </Typography>
          </>
        }
        {...rest}
      />
    </>
  );
};
