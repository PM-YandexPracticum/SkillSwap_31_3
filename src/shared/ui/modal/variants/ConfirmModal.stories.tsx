import React, { useState } from 'react';
import { ConfirmModal } from './ConfirmModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ConfirmModal> = {
  title: 'shared/ui/modal/variants/ConfirmModal',
  component: ConfirmModal
};

export default meta;

const mockData = {
  title: 'Игра на барабанах',
  description:
    'Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники, играть любимые ритмы и звучать уверенно даже без партитуры.',
  images: [
    'https://avatars.mds.yandex.net/i?id=ecc49aafa99eb920ec893ee03da60d7a5479de26-3931230-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=737bea391138759d3148ced6c01ce07ed52090f0-10813564-images-thumbs&n=13'
  ]
};

export const Default: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
      alert('Закрытие модального окна');
      setOpen(false);
    };

    const handleSubmit = () => {
      alert('Сабмит!');
      setOpen(false);
    };

    return (
      <>
        {open && (
          <ConfirmModal
            onClose={handleClose}
            submit={handleSubmit}
            title={mockData.title}
            description={mockData.description}
            images={mockData.images}
          />
        )}
      </>
    );
  }
};
