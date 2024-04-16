export default {
    stories: ["../src/**/stories.mdx", "../src/**/stories.@(js|jsx|ts|tsx)"],
    framework: {
        // name: '@storybook/react-webpack5', // Remove this
        name: '@storybook/nextjs', // Add this
        options: {
            builder: {
                useSWC: true, // Enables SWC support
            },
        },
    },
};