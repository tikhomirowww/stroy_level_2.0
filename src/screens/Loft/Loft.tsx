import Demo from "@/components/Demo/Demo";
import { IDemo } from "@/components/Demo/Demo.types";
import Description from "@/components/Description/Description";
import Layout from "@/components/Layout/Layout";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import Section from "@/components/Section/Section";
import Title from "@/components/Title/Title";
import React from "react";
import { demoLoft, loftCarousel } from "./consts";

const Loft = () => {
  return (
    <Layout title="Лофт" description="Лофт перегородки">
      <Section className="md:h-[650px] md:flex p-7 items-center justify-around product__hero_adap">
        <Description
          title="Лофт"
          description="Перегородки лофт представляют собой сварные металлические конструкции с заполнением из стекла. Конструкции используют для зонирования внутреннего пространства коммерческих и жилых помещений."
        />
        <MyCarousel images={loftCarousel} />
      </Section>
      <Title name="Виды перегородок" />
      <Section className="md:flex justify-around py-14">
        {demoLoft.map((item, i) => (
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

export default Loft;
