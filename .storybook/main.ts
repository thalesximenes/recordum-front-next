export default {
  stories: ["../src/**/stories.mdx", "../src/**/stories.@(js|jsx|ts|tsx)"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
};
