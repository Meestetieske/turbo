import type { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

// import { userEvent, within } from '@storybook/testing-library';
import NavLink from ".";

export default {
  component: NavLink,
  title: "web/atoms/NavLink",
  parameters: {
    darkMode: {
      current: "light",
    },
  },
  args: {
    children: "Home",
    href: "#",
  },
} as Meta<typeof NavLink>;

const Template: StoryFn<ComponentProps<typeof NavLink>> = (args) => (
  <NavLink {...args} />
);

export const Default = Template.bind({});
