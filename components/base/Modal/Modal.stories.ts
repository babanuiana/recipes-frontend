import type { Meta, StoryObj } from "@storybook/vue3";

import BaseTypography from "../Typography/Typography.vue";
import BaseCircularIconButton from "../CircularIconButton/CircularIconButton.vue";
import BaseDivider from "../Divider/Divider.vue";
import BaseModal from "./Modal.vue";

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
