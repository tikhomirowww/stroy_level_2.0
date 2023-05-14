import Demo from "@/components/Demo/Demo";
import { IDemo } from "@/components/Demo/Demo.types";
import Description from "@/components/Description/Description";
import Layout from "@/components/Layout/Layout";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import Section from "@/components/Section/Section";
import Title from "@/components/Title/Title";
import { demoLoft, loftCarousel } from "@/consts";
import React from "react";

const loft = () => {
  return (
    <Layout title="Лофт" description="Лофт перегородки">
      <Section className="h-[650px] flex items-center justify-around">
        <Description
          title="Лофт"
          description="Перегородки лофт представляют собой сварные металлические конструкции с заполнением из стекла. Конструкции используют для зонирования внутреннего пространства коммерческих и жилых помещений."
        />
        <MyCarousel images={loftCarousel} />
      </Section>
      <Title name="Виды перегородок" />
      <Section className="flex justify-around py-14">
        {demoLoft.map((item) => (
          <Demo image={item.image} desc={item.desc} title={item.title} />
        ))}
      </Section>
    </Layout>
  );
};

export default loft;
