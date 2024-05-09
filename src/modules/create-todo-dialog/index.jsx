import { Button, Stack, DialogTitle, Dialog, DialogContent, DialogActions, TextField } from '@mui/material';
import TextInput from '@/components/inputs/text-input';
import { FormProvider } from 'react-hook-form';

import useCreateTodoHandler from './useCreateTodoHandler';

export default function CreateTodoModule({ isOpen, onClose }) {
  const { methods, handleOnSubmit } = useCreateTodoHandler({ submitEvent: onClose });

  return (
    <Dialog open={isOpen} fullWidth>
      <DialogTitle sx={{ pb: '0' }}>Create Todo</DialogTitle>

      <FormProvider {...methods}>
        <Stack component="form" onSubmit={methods.handleSubmit(handleOnSubmit)}>
          <DialogContent>
            <Stack spacing="16px">
              <TextInput name="title" placeholder="Title" type="text" defaultValue="" label="Title" />
              <TextInput name="description" placeholder="Description" type="text" defaultValue="" label="Description" />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ width: '97%', pb: '20px' }}>
            <Stack width="97%" spacing="6px">
              <Button variant="contained" type="submit">
                CREATE
              </Button>
              <Button variant="contained" color="error" onClick={onClose}>
                CANCEL
              </Button>
            </Stack>
          </DialogActions>
        </Stack>
      </FormProvider>
    </Dialog>
  );
}
