import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CollapseProps } from '@mui/material/Collapse';

import Box from '@components/Box';
import Collapse from '@components/Collapse';
import Divider from '@components/Divider';
import Paper from '@components/Paper';
import Typography from '@components/Typography';

export default {
  title: 'Collapse',
  component: Collapse,
  argTypes: {
    in: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Collapse>;

export const Demo: ComponentStory<typeof Collapse> = (args: CollapseProps) => (
  <Paper sx={{ padding: 2 }}>
    <Box>Collapse Header</Box>
    <Divider sx={{ marginY: 1.5 }} />
    <Collapse {...args}>
      <Typography>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
      </Typography>
      <Typography>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp
        and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large
        plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
        salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and
        remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
      <Typography>
        {' '}
        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until
        most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels,
        tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just
        tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
      </Typography>
      <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
    </Collapse>
  </Paper>
);

Demo.args = {
  in: true,
};
