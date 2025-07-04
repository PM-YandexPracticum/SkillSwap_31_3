import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof NotFoundPage>;

export const Default: StoryObj<typeof NotFoundPage> = {
  render: () => <NotFoundPage />
};
