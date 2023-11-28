import type { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

// import { userEvent, within } from '@storybook/testing-library';
import Header from ".";

export default {
  component: Header,
  title: "web/organisms/Header",
  parameters: {
    darkMode: {
      // Set the initial theme
      current: "light",
    },
    layout: "fullscreen",
  },
  args: {
    mode: "light",
  },
  argTypes: {
    mode: {
      control: "radio",
      options: ["light", "dark"],
    },
  },
} as Meta<typeof Header>;

const Template: StoryFn<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});
