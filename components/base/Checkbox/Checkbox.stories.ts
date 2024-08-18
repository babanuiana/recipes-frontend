import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "./Checkbox.vue";

const meta: Meta<typeof Checkbox> = {
  title: "Base/Checkbox",
  component: Checkbox,
  args: {
    modelValue: false,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => ({
    components: {
      Checkbox,
    },
    setup() {
      return { args };
    },
    template: `<Checkbox v-bind="args" />`,
  }),
};

export const Checked: Story = {
  render: (args) => ({
    components: {
      Checkbox,
    },
    setup() {
      return { args };
    },
    template: `<Checkbox v-bind="args" :modelValue="true" />`,
  }),
};
