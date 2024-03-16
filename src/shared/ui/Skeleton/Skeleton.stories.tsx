import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {
    width: '50px',
    height: '50px'
  }
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const CommonDark = Template.bind({});
CommonDark.args = {
  width: '100px',
};
CommonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CommonGREEN = Template.bind({});
CommonGREEN.args = {
  width: '100px',
};
CommonGREEN.decorators = [ThemeDecorator(Theme.GREEN)];

export const CommonLIGHT = Template.bind({});
CommonLIGHT.args = {
  width: '100px',
};
CommonLIGHT.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Circle = Template.bind({});
Circle.args = {
  borderRadius: '50%'
};
Circle.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ImageLight: ComponentStory<typeof Skeleton> = (args) => <Skeleton.Image {...args} />;
ImageLight.args = {
  width: '300px',
  height: '100px',
  borderRadius: '25px'
};
ImageLight.decorators = [ThemeDecorator(Theme.LIGHT)];


export const ImageGREEN: ComponentStory<typeof Skeleton> = (args) => <Skeleton.Image {...args} />;
ImageGREEN.args = {
  width: '300px',
  height: '100px',
  borderRadius: '25px'
};
ImageGREEN.decorators = [ThemeDecorator(Theme.GREEN)];

export const ImageDARK: ComponentStory<typeof Skeleton> = (args) => <Skeleton.Image {...args} />;
ImageDARK.args = {
  width: '300px',
  height: '100px',
  borderRadius: '25px'
};
ImageDARK.decorators = [ThemeDecorator(Theme.DARK)];


export const AvatarLight: ComponentStory<typeof Skeleton> = (args) => <Skeleton.Avatar {...args} />;
AvatarLight.args = {
  width: '150px',
  height: '150px',
  borderRadius: '50%'
};
AvatarLight.decorators = [ThemeDecorator(Theme.LIGHT)];
