"use client";

import { HeroUIProvider } from "@heroui/system";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const Providers = ({ children, themeProps }: ProvidersProps) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        {...themeProps}
        attribute="class"
        defaultTheme="system"
      >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
};

export default Providers;
