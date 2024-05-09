import { Input, InputLabel, styled } from '@mui/material';

const InputField = styled(Input)((props) => ({
  'label+&': { marginTop: '0' },
  '&::before': { content: 'unset' },
  '&::after': { content: 'unset' },

  '& > input': {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '21px',
    color: 'black',

    transition: 'border-color 200ms ease',
    backgroundColor: 'white',
    margin: '4px 0',
    padding: '12px',
    display: 'flex',

    borderRadius: '4px',
    border: '1px solid',
    borderColor: 'silver',

    '&:focus': {
      borderColor: 'black',
    },

    '&:disabled': {
      backgroundColor: 'white',
      borderColor: 'silver',
      '&:placeholder': { color: 'silver' },
    },

    '&::placeholder': { color: 'silver' },

    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },

    '&::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },

  '& > textarea': {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '21px',
    color: 'black',

    backgroundColor: 'white',
    borderRadius: '4px',
    padding: '16px 12px',
    border: '1px solid',
    borderColor: 'silver',
    transition: 'border-color 200ms ease',
    margin: '6px 0',

    '&:focus': {
      borderColor: 'blue',
    },
  },
}));

const Label = styled(InputLabel)((props) => ({
  color: 'black',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '21px',
  transform: 'none',
  position: 'static',

  '& .MuiFormLabel-asterisk': {
    color: 'red',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
  },
  '&.Mui-error': { color: 'red' },
  '&.Mui-focused': { color: 'black' },
}));

export { InputField, Label };
