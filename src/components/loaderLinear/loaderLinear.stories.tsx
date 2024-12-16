import { Meta, StoryObj } from "@storybook/react";
import { LoaderLinear } from "@/components/loaderLinear/loaderLinear";

const meta = {
  component: LoaderLinear,
  title: 'Components/LoaderLinear',
} satisfies Meta<typeof LoaderLinear>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  loaders: []
}