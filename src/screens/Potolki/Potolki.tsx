import Demo from "@/components/Demo/Demo";
import Description from "@/components/Description/Description";
import Layout from "@/components/Layout/Layout";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import Section from "@/components/Section/Section";
import Title from "@/components/Title/Title";
import React from "react";
import { demoPotolki, poptolkiImg } from "./consts";

const Potolki = () => {
  return (
    <Layout title="Потолки" description="Подвесные потолки - грильято">
      <Section className="h-[650px] flex items-center justify-around">
        <Description
          title="Грильято"
          description="Грильято — ячеистый подвесной потолок, созданный дизайнерами из Италии более 50-ти лет назад."
        />
        <MyCarousel images={poptolkiImg} />
      </Section>
      <Title name="Потолки грильято" />
      <Section className="flex justify-around p-14 flex-wrap gap-24">
        {demoPotolki.map((item, i) => (
          <Demo
            key={i}
            image={item.image}
            desc={item.desc}
            title={item.title}
          />
        ))}
      </Section>
    </Layout>
  );
};

export default Potolki;
