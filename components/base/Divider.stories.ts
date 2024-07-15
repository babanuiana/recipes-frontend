import type { Meta, StoryObj } from "@storybook/vue3";

import Divider from "./Divider.vue";

const meta: Meta<typeof Divider> = {
  title: "Base/BaseDivider",
  component: Divider,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `<Divider />`,
  }),
};
