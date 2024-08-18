import type { Meta, StoryObj } from "@storybook/vue3";

import BaseTypography from "../Typography/Typography.vue";
import BaseLink from "./Link.vue";

const meta: Meta<typeof BaseLink> = {
  title: "Base/BaseLink",
  component: BaseLink,
  args: {
    href: "",
    variant: "body-01",
    color: "shade-02",
  },
};

export default meta;

type Story = StoryObj<typeof BaseLink>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseLink },
    setup() {
      return { args };
    },
    template: `
      <BaseLink v-bind="args">
        Default Link
      </BaseLink>
    `,
  }),
};

export const WithHref: Story = {
  render: (args) => ({
    components: { BaseLink, BaseTypography },
    setup() {
      return { args };
    },
    template: `
      <BaseLink v-bind="args" href="https://example.com">
        Link with Href
      </BaseLink>
    `,
  }),
};

export const WithButton: Story = {
  render: (args) => ({
    components: { BaseLink, BaseTypography },
    setup() {
      return { args };
    },
    template: `
      <BaseLink v-bind="args">
        Button Link
      </BaseLink>
    `,
  }),
};
