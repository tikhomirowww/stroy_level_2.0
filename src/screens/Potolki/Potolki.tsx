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
    <Layout
      title="Потолки"
      description="Индивидуальные потолки Грильято в Бишкеке - придайте своему интерьеру безграничные возможности. Наша коллекция потолков Грильято предлагает стильные и функциональные решения для вашего дома или офиса. Высокое качество материалов, разнообразие цветов и фактур, а также простота монтажа. Создайте потрясающую атмосферу в вашем пространстве с помощью потолков Грильято. Закажите индивидуальные потолки прямо сейчас и воплотите свои дизайнерские идеи в реальность!"
    >
      <Section className="md:h-[650px] md:flex p-7 items-center justify-around product__hero_adap">
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
