import { useState } from 'react';
import { Offered } from '@shared/ui/modal/variants/Offered';
import React from 'react';

export default {
  title: 'Modals/Offered',
  component: Offered
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  return open ? <Offered onClose={() => setOpen(false)} /> : null;
};
