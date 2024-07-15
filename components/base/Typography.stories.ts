import type { Meta, StoryObj } from "@storybook/vue3";

import Typography from "./Typography.vue";

// Font variants with their corresponding styles
const variants = [
  { name: "heading-01", style: "22px, regular" },
  { name: "heading-01-semibold", style: "22px, semibold" },
  { name: "body-01", style: "18px/24px, regular" },
  { name: "body-01-medium", style: "18px/24px, medium" },
  { name: "body-01-semibold", style: "18px/24px, semibold" },
  { name: "body-02", style: "16px, regular" },
  { name: "body-02-medium", style: "16px, medium" },
  { name: "body-02-semibold", style: "16px, semibold" },
  { name: "body-03", style: "14px, regular" },
  { name: "body-03-semibold", style: "14px, semibold" },
  { name: "body-04", style: "13px, regular" },
  { name: "body-04-semibold", style: "13px, semibold" },
  { name: "body-05", style: "12px, regular" },
  { name: "body-05-medium", style: "12px, medium" },
  { name: "body-05-semibold", style: "12px, semibold" },
  { name: "micro-01", style: "10px, semibold" },
];

// Color variants with their corresponding values
const colors = [
  { name: "shade-01", value: "#ffffff" },
  { name: "shade-02", value: "#222222" },
  { name: "shade-03", value: "rgba(34, 34, 34, 0.05)" },
  { name: "shade-04", value: "rgba(34, 34, 34, 0.3)" },
  { name: "neutral-01", value: "#f7f7f7" },
  { name: "neutral-02", value: "#ebebeb" },
  { name: "neutral-03", value: "#dddddd" },
  { name: "neutral-04", value: "#d3d3d3" },
  { name: "neutral-05", value: "#c2c2c2" },
  { name: "neutral-06", value: "#b0b0b0" },
  { name: "neutral-07", value: "#717171" },
  { name: "neutral-08", value: "#5e5e5e" },
  { name: "primary-01", value: "#f6475f" },
  { name: "primary-02", value: "#ff385c" },
  { name: "error-01", value: "#fef8f6" },
];

const meta: Meta<typeof Typography> = {
  title: "Base/BaseTypography",
  component: Typography,
  args: {
    tag: "div",
    variant: "body-01",
    color: "shade-02",
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

// Helper function to determine if a color is light or dark
const isLightColor = (color: string): boolean => {
  if (color.startsWith("rgba")) {
    const rgba = color.replace("rgba(", "").replace(")", "").split(",");
    const r = parseInt(rgba[0], 10);
    const g = parseInt(rgba[1], 10);
    const b = parseInt(rgba[2], 10);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155;
  } else if (color.startsWith("#")) {
    const hex = color.slice(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155;
  }
  return false;
};

export const Gallery: Story = {
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args, variants };
    },
    template: `
      <div>
        <div v-for="variant in variants" :key="variant.name" style="margin-bottom: 1rem;">
          <Typography v-bind="args" :variant="variant.name">
            {{ variant.name }} ({{ variant.style }})
          </Typography>
        </div>
      </div>
    `,
  }),
};

export const ColorGallery: Story = {
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args, colors, isLightColor };
    },
    template: `
      <div>
        <div v-for="color in colors" :key="color.name" style="margin-bottom: 1rem;">
          <Typography 
            v-bind="args" 
            :color="color.name" 
            :style="{ backgroundColor: color.value, color: isLightColor(color.value) ? '#000' : '#fff' }">
            {{ color.name }} ({{ color.value }})
          </Typography>
        </div>
      </div>
    `,
  }),
};
