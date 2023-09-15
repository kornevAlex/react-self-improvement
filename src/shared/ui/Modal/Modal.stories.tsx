import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import { Modal } from './Modal';
export default {
	title: 'shared/Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
	return <Modal portalTarget={document.getElementById('root')} {...args} />;
};

export const LightModal = Template.bind({});
LightModal.args = {
	isOpen: true,
	children: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni nemo sequi eos nobis veritatis, deserunt omnis laborum eum hic voluptas, mollitia, temporibus minus dolor quasi quam natus expedita minima.</div>
};
LightModal.decorators = [ThemeDecorator(Theme.LIGHT)];


export const DarkModal = Template.bind({});
DarkModal.args = {
	isOpen: true,
	children: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni nemo sequi eos nobis veritatis, deserunt omnis laborum eum hic voluptas, mollitia, temporibus minus dolor quasi quam natus expedita minima.</div>
};
DarkModal.decorators = [ThemeDecorator(Theme.DARK)];
