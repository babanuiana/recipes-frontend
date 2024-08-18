import type { Meta, StoryObj } from "@storybook/vue3";

import BaseDropdown from "./Dropdown.vue";

const meta: Meta<typeof BaseDropdown> = {
  title: "Base/BaseDropdown",
  component: BaseDropdown,
  args: {
    id: "dropdown",
    label: "Label",
    helperText: "Helper text",
    status: "default",
    errorMessage: "Error message",
  },
};

export default meta;

type Story = StoryObj<typeof BaseDropdown>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseDropdown },
    setup() {
      return { args };
    },
    template: `
      <BaseDropdown v-bind="args">
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </BaseDropdown>
    `,
  }),
};

export const ErrorState: Story = {
  render: (args) => ({
    components: { BaseDropdown },
    setup() {
      return { args };
    },
    template: `
      <BaseDropdown v-bind="args" status="error">
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </BaseDropdown>
    `,
  }),
};
