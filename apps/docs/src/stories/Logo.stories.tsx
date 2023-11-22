import type { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

// import { userEvent, within } from '@storybook/testing-library';
import Logo from "@repo/ui/Logo";

export default {
  component: Logo,
  title: "atoms/Logo",
  args: {
    hasText: true,
    mode: "light",
  },
  argTypes: {
    mode: {
      control: "radio",
      options: ["light", "dark"],
    },
  },
} as Meta<typeof Logo>;

const Template: StoryFn<ComponentProps<typeof Logo>> = (args) => (
  <Logo {...args} />
);

export const Default = Template.bind({});
