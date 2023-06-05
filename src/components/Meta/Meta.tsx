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
            <meta name="og:description" content={description} />
            <meta
              name="keywords"
              content="лофт перегородки, перегородки, лофт, душевые, биокамины, потолки, грильято, ремонт, дизайн, интерьер, бишкекб интерьерные решения, Дизайн пространства, Уют и комфорт,  Эстетика и функциональность, Качество и надежность, Индивидуальный дизайн, Монтаж и установка, Широкий выбор стилей и размеров, Безопасность и удобство использования"
            />
            <link rel="icon" href="/logo.png" />
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
