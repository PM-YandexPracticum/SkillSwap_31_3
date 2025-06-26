import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithState = () => {

	const options = [
		{ title: 'Всё', value: 'Всё', className: '' },
		{ title: 'Хочу научиться', value: 'Хочу научиться', className: '' },
		{ title: 'Могу научить', value: 'Могу научить', className: '' },		
	];

	const [selected, setSelected] = useState(options[0]);

	const optionsSex = [
		{ title: 'Не имеет значения', value: 'Не имеет значения', className: '' },
		{ title: 'Мужской', value: 'Мужской', className: '' },
		{ title: 'Женский', value: 'Женский', className: '' },		
	];
	const [selectedSex, setSelectedSex] = useState(optionsSex[0]);

	return (
		<>
		<RadioGroup
				selected={selected}
				name='radio'
				onChange={setSelected}
				options={options}
				title=''
			/>
			<RadioGroup
				selected={selectedSex}
				name='radio'
				onChange={setSelectedSex}
				options={optionsSex}
				title='Пол автора'
			/>
		</>
	);
};

export const RadioGroupStory: Story = {
	render: () => <RadioGroupWithState />,
};
