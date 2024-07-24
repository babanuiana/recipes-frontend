import type { Meta, StoryObj } from "@storybook/vue3";

import Chip from "./Chip.vue";
import BaseTypography from "./Typography.vue";

const meta: Meta<typeof Chip> = {
  title: "Base/BaseChip",
  component: Chip,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: (args) => ({
    components: { Chip, BaseTypography },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">
        Default Chip
      </Chip>
    `,
  }),
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { Chip, BaseTypography },
    setup() {
      return { args };
    },
    template: `
      <Chip v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.732.593l4.39-2.256 4.389 2.256c.373.198.81-.149.732-.592l-.83-4.73 3.523-3.356c.33-.315.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0l-2.165 4.57-4.898.696c-.441.062-.613.635-.283.95l3.523 3.356-.83 4.73z"/>
          </svg>
        </template>
        Chip with Icon
      </Chip>
    `,
  }),
};
