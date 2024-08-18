import type { Meta, StoryObj } from "@storybook/vue3";
import BaseTypography from "../Typography/Typography.vue";
import Button from "./Button.vue";

const variants = ["primary", "secondary", "tertiary"];
const sizes = ["small", "full-width"];

const meta: Meta<typeof Button> = {
  title: "Base/BaseButton",
  component: Button,
  args: {
    variant: "primary",
    size: "small",
    disabled: false,
    type: "button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Gallery: Story = {
  render: (args) => ({
    components: { Button, BaseTypography },
    setup() {
      return { args, variants, sizes };
    },
    template: `
      <div>
        <div v-for="variant in variants" :key="variant">
          <div v-for="size in sizes" :key="size" style="margin-bottom: 1rem;">
            <Button v-bind="args" :variant="variant" :size="size">
              {{ variant }} - {{ size }}
            </Button>
          </div>
        </div>
      </div>
    `,
  }),
};
