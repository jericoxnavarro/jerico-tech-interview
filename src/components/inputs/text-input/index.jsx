import { Controller, useFormContext } from 'react-hook-form';
import { InputLabel, Input, FormHelperText, FormControl, Stack } from '@mui/material';
import { InputField, Label } from './styled';

export default function TextInput({
  methods, // If have own `useForm`
  name,
  placeholder,
  label,
  type,
  required,
  defaultValue,
}) {
  const context = useFormContext();
  const controler = methods || context;

  return (
    <Controller
      name={name}
      control={controler.control}
      {...controler}
      defaultValue={defaultValue}
      render={(renderProps) => {
        const { field, fieldState } = renderProps;
        const error = fieldState?.error;

        return (
          <FormControl id={name} component={Stack} error={error} width="100%">
            <Label htmlFor={name} required={required}>
              {label}
            </Label>
            <InputField
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              error={fieldState.invalid}
              {...field}
              sx={{
                '& > input': {
                  borderColor: error ? 'red' : 'silver',
                },
              }}
            />
            {error && (
              <FormHelperText error={error} sx={{ ml: 0 }}>
                {error?.message}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
}
