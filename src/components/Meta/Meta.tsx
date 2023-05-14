import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { IMeta } from "./Meta.types";

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={title} />
            <link rel="icon" href="/logo.png" />
            <link
              href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap"
              rel="stylesheet"
            />
          </>
        ) : (
          <>
            <meta name="robots" content="noindex, nofollow" />
            <link rel="icon" href="/union.svg" />
          </>
        )}
      </Head>
      <main className="max-w-[120rem] m-auto">{children}</main>
    </>
  );
};

export default Meta;
