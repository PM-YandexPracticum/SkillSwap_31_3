import { useState } from 'react';
import { Created } from '@shared/ui/modal/variants/Created';
import React from 'react';

export default {
  title: 'Modals/Created',
  component: Created
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  return open ? <Created onClose={() => setOpen(false)} /> : null;
};
