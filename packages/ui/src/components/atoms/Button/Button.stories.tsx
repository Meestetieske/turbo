import type { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

// import { userEvent, within } from '@storybook/testing-library';
import Button from ".";

export default {
  component: Button,
  title: "ui/atoms/Button",
  parameters: {
    darkMode: {
      current: "light",
    },
  },
  args: {
    children: "Submit",
    color: "primary",
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "secondary"],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
