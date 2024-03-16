import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
export default {
  title: 'shared/Code',
  component: Code,
  args: {
    children: `
        import { ComponentStory, ComponentMeta } from '@storybook/react';
        import { Code } from './Code';
        import { ThemeDecorator } from 'shared/config/storybook';
        import { Theme } from 'app/providers/ThemeProvider';
        export default {
            title: 'shared/Code',
            component: Code,
            args: {
                children: 'Text',
            }
        } as ComponentMeta<typeof Code>;
        
        const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
        
        export const TextWithTitle = Template.bind({});
        TextWithTitle.args = {};`,
  }
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const LightCode = Template.bind({});
LightCode.args = {};
LightCode.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
