import { Stack, Typography, Checkbox, Chip, IconButton } from '@mui/material';
import { FiberManualRecord, Delete, SignalCellularNullSharp } from '@mui/icons-material';
import { Container } from './styled';
import { STATUSES } from './constants';

export default function TodoCard({ id, title, description, status, onClickCheckBox, onClickDelete }) {
  const TODO_STATUS = STATUSES[status] || STATUSES.added;
  const isDone = TODO_STATUS.STATUS === 'done';

  return (
    <Container>
      <Checkbox checked={isDone ? true : false} onChange={(e) => onClickCheckBox({ todoId: id, value: e.target.checked })} />
      <Stack ml="8px" mr="auto">
        <Typography variant="h6" sx={{ textDecoration: isDone ? 'line-through' : null }}>
          {title}
        </Typography>
        <Typography variant="body2" color="silver" sx={{ textDecoration: isDone ? 'line-through' : null }}>
          {description}
        </Typography>
      </Stack>

      <Chip icon={<FiberManualRecord />} label={TODO_STATUS.LABEL} variant="filled" color={TODO_STATUS.COLOR} sx={{ width: '100px' }} />

      <IconButton onClick={() => onClickDelete({ todoId: id })} sx={{ ml: '4px' }}>
        <Delete color="error" />
      </IconButton>
    </Container>
  );
}
