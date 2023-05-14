import Demo from "@/components/Demo/Demo";
import Description from "@/components/Description/Description";
import Layout from "@/components/Layout/Layout";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import Section from "@/components/Section/Section";
import Title from "@/components/Title/Title";
import { demoKaminy, demoShower, kaminyImg, showerImg } from "@/consts";
import React from "react";

const kaminy = () => {
  return (
    <Layout title="Биоамины" description="Биокамины в Бишкеке">
      <Section className="h-[650px] flex items-center justify-around">
        <Description
          title="Биоамины"
          description="Биокамин — это современное устройство с живым пламенем, не нуждающееся в дымовой вентиляции и не предполагающее использования деревянных поленьев. Его конструкция включает в себя топливный блок и декоративную отделку."
        />
        <MyCarousel images={kaminyImg} />
      </Section>
      <Title name="Виды биокаминов" />
      <Section className="flex justify-around p-14 flex-wrap gap-24">
        {demoKaminy.map((item) => (
          <Demo image={item.image} desc={item.desc} title={item.title} />
        ))}
      </Section>
    </Layout>
  );
};

export default kaminy;
