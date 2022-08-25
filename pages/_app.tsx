import * as React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { AppContextProvider } from "../src/contexts/app.context";
import { AppProps } from "next/app";
import MyThemeProvider from "../src/theme-provider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type Props  = AppProps & {
    emotionCache: any,
};

export default function MyApp(props: Props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <AppContextProvider>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <MyThemeProvider>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </MyThemeProvider>
            </CacheProvider>
        </AppContextProvider>
    );
}
