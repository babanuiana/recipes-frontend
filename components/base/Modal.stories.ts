import type { Meta, StoryObj } from "@storybook/vue3";

import BaseModal from "./Modal.vue";
import BaseTypography from "./Typography.vue";
import BaseCircularIconButton from "./CircularIconButton.vue";
import BaseDivider from "./Divider.vue";

const meta: Meta<typeof BaseModal> = {
  title: "Base/BaseModal",
  component: BaseModal,
  args: {
    size: "small",
  },
};

export default meta;

type Story = StoryObj<typeof BaseModal>;

export const Default: Story = {
  render: (args) => ({
    components: {
      BaseModal,
      BaseTypography,
      BaseCircularIconButton,
      BaseDivider,
    },
    setup() {
      return { args };
    },
    template: `
      <BaseModal v-bind="args" @close="args.onClose">
        <template #header>
          Modal Header
        </template>
        Modal Content
      </BaseModal>
    `,
  }),
};

export const LargeModal: Story = {
  render: (args) => ({
    components: {
      BaseModal,
      BaseTypography,
      BaseCircularIconButton,
      BaseDivider,
    },
    setup() {
      return { args };
    },
    template: `
      <BaseModal v-bind="args" size="large" @close="args.onClose">
        <template #header>
          Large Modal Header
        </template>
        Large Modal Content
      </BaseModal>
    `,
  }),
};
