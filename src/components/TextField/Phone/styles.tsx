import DefaultThemes, { themes } from '@styles/Themes';

const Styles = {
  containerStyle: {
    '.PhoneInputInput': {
      backgroundColor: 'red',
    },
  },
  inputStyle: {
    minHeight: DefaultThemes.spacing(5),
    borderRadius: themes.borderRadius.default,
    width: '100%',
  },
  buttonStyle: {
    borderRadius: DefaultThemes.spacing(1),
    backgroundColor: 'white',
  },
};

export default Styles;
