import { Meta, StoryObj } from "@storybook/react";
import Modal from "@/components/modal/modal";

const meta = {
  component: Modal,
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Email sent',
    children: 'We have sent a link to confirm your email to epam@epam.com'
  },
}