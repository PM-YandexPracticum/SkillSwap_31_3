import { useState } from 'react';
import { NeedRegister } from '@shared/ui/modal/variants/NeedRegister';
import { MemoryRouter } from 'react-router-dom';
import type { StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Modals/NeedRegister',
  component: NeedRegister
};
export const Default = () => {
  const [open, setOpen] = useState(true);
  return open ? (
    <NeedRegister onClose={() => setOpen(false)} onRegister={() => {}} />
  ) : null;
};
