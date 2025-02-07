"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { HeroUIProvider } from "@heroui/system";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});

const Providers = ({ children, themeProps }: ProvidersProps) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        {...themeProps}
        attribute="class"
        defaultTheme="system"
      >
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
};

export default Providers;
