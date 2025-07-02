import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxList } from './CheckboxList';
import { useState } from 'react';
import React from 'react';

const meta: Meta<typeof CheckboxList> = {
  component: CheckboxList
};

export default meta;
type Story = StoryObj<typeof CheckboxList>;

const CheckboxListWithState = () => {
  const optionsSkills = [
    { title: 'Бизнес и карьера', value: 'Бизнес и карьера', className: '' },
    {
      title: 'Творчество и искусство',
      value: 'Творчество и искусство',
      className: ''
    },
    { title: 'Иностранные языки', value: 'Иностранные языки', className: '' },
    {
      title: 'Образование и развитие',
      value: 'Образование и развитие',
      className: ''
    },
    {
      title: 'Здоровье и лайфстайл',
      value: 'Здоровье и лайфстайл',
      className: ''
    },
    { title: 'Дом и уют', value: 'Дом и уют', className: '' }
  ];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

	const handleChangeSkills = (value: string) => {
		setSelectedSkills((prev) =>
			prev.includes(value)
				? prev.filter((item) => item !== value)
				: [...prev, value]
		);
	};

  const optionsCities = [
    { value: 'Москва' },
    { value: 'Санкт-Петербург' },
    { value: 'Новосибирск' },
    { value: 'Екатеринбург' },
    { value: 'Казань' }
  ];
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const handleChangeCities = (value: string) => {
      setSelectedSkills((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    };

  return (
    <>
      <CheckboxList
        selected={selectedSkills}
        name='checkboxList_skills'
        onChange={handleChangeSkills}
        options={optionsSkills}
        title='Навыки'
       
      />
      <CheckboxList
        selected={selectedCities}
        name='checkboxList_cities'
        onChange={handleChangeCities}
        options={optionsCities}
        title='Город'
      />
    </>
  );
};

export const CheckboxListStory: Story = {
  render: () => <CheckboxListWithState />
};
