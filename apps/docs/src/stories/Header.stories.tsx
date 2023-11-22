import type { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

// import { userEvent, within } from '@storybook/testing-library';
import Header from "@repo/ui/Header";

export default {
  component: Header,
  title: "organisms/Header",
  parameters: {
    darkMode: {
      // Set the initial theme
      current: "light",
    },
  },
  args: {},
  argTypes: {},
} as Meta<typeof Header>;

const Template: StoryFn<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});
