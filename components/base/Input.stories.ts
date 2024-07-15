import type { Meta, StoryObj } from "@storybook/vue3";

import BaseInput from "./Input.vue";

const meta: Meta<typeof BaseInput> = {
  title: "Base/BaseInput",
  component: BaseInput,
  args: {
    id: "input",
    label: "Label",
    helperText: "Helper text",
    status: "default",
    errorMessage: "Error message",
    type: "text",
    modelValue: "",
  },
};

export default meta;

type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      return { args };
    },
    template: `
      <BaseInput v-bind="args" />
    `,
  }),
};

export const WithError: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      return { args };
    },
    template: `
      <BaseInput v-bind="args" status="error" />
    `,
  }),
};

export const WithPlaceholder: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      return { args };
    },
    template: `
      <BaseInput v-bind="args" placeholder="Enter text here" />
    `,
  }),
};
