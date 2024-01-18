import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

//https://mantine.dev/colors-generator/?color=504C97
const myColor: MantineColorsTuple = [
  "#f2f0ff",
  "#e0dff2",
  "#bfbdde",
  "#9b98ca",
  "#7d79ba",
  "#6a65b0",
  "#605bac",
  "#504c97",
  "#464388",
  "#3b3979",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
