import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

const MChip = styled(Chip)(({ theme, status, selected, size }: Record<string, any>) => {
  const defaults: Record<string, any> = {
    color: theme.newColors.gray[600],
    backgroundColor: theme.newColors.gray[100],
  };

  switch (status) {
    case 'active':
      defaults.color = theme.newColors.green[600];
      defaults.backgroundColor = theme.newColors.green[100];
      break;
    case 'pending':
      defaults.color = theme.newColors.yellow[600];
      defaults.backgroundColor = theme.newColors.yellow[100];
      break;
    case 'locked':
      defaults.color = theme.newColors.red[600];
      defaults.backgroundColor = theme.newColors.red[100];
      break;
    case 'choice':
      defaults.color = selected ? theme.newColors.primary[500] : theme.newColors.gray[800];
      defaults.backgroundColor = selected ? theme.newColors.primary[50] : 'white';
      defaults.border = `solid 1px ${selected ? theme.newColors.primary[500] : theme.newColors.gray[200]}`;
      defaults.height = size === 'medium' ? theme.spacing(5) : 'unset';
      defaults.borderRadius = theme.spacing(2.5);
      break;
    default:
      break;
  }

  return {
    fontWeight: theme.fontWeight.normal,
    marginRight: 5,
    '& .MuiChip-labelMedium': {
      padding: '4px 16px',
      fontSize: theme.fontSize.xMedium,
      lineHeight: theme.spacing(3),
    },
    '& .MuiChip-labelSmall': {
      fontSize: theme.fontSize.normal,
      lineHeight: theme.spacing(2.5),
    },
    '& .MuiChip-deleteIcon': {
      color: defaults.color,
      fontSize: theme.fontSize.xMedium,
      marginRight: theme.spacing(size === 'small' ? 1 : 1.125),
      marginTop: theme.spacing(size === 'small' ? 0.125 : 0.25),
      ':hover': {
        color: `${defaults.color}8f`,
      },
    },
    ...defaults,
  };
});

export default MChip;
