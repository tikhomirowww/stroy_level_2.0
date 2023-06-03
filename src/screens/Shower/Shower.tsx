import React from "react";
import Description from "@/components/Description/Description";
import Layout from "@/components/Layout/Layout";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import Section from "@/components/Section/Section";
import Title from "@/components/Title/Title";
import Demo from "@/components/Demo/Demo";
import { demoShower, showerImg } from "./consts";

const Shower = () => {
  return (
    <Layout title="Душевые" description="Душевые - бишкек">
      <Section className="md:h-[650px] md:flex p-7 items-center justify-around product__hero_adap">
        <Description
          title="Душевые"
          description="Душевые перегородки из стекла очень популярны в современных интерьерах ванных комнат, так как изящно, просто и надежно трансформируют пространство, создавая новые конструкции и функциональные возможности этой комнаты."
        />
        <MyCarousel images={showerImg} />
      </Section>
      <Title name="Виды душевых перегородок" />
      <Section className="flex justify-around flex-wrap p-5">
        {demoShower.map((item, i) => (
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

export default Shower;
