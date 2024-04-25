import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import React from "react";
import { theme } from "../src/components/themes";

export const decorators = [
  (renderStory: any) => (
    <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
  ),
];
