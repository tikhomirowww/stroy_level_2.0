import Demo from "@/components/Demo/Demo";
import Description from "@/components/Description/Description";
import Layout from "@/components/Layout/Layout";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import Section from "@/components/Section/Section";
import Title from "@/components/Title/Title";
import { demoKaminy, kaminyImg } from "./consts";

const Kaminy = () => {
  return (
    <Layout
      title="Биоамины"
      description="Инновационные биокамины в Бишкеке - создайте атмосферу тепла и уюта в вашем доме. Безопасные и экологически чистые, наши биокамины не требуют дымоотвода и позволяют наслаждаться огнем без забот. Широкий выбор стилей и размеров, высокое качество и элегантный дизайн. Превратите ваше пространство в уютный уголок с нашими биокаминами. Закажите биокамин прямо сейчас и добавьте шарм и комфорт в свой дом!"
    >
      <Section className="md:h-[650px] md:flex p-7 items-center justify-around product__hero_adap">
        <Description
          title="Биоамины"
          description="Биокамин — это современное устройство с живым пламенем, не нуждающееся в дымовой вентиляции и не предполагающее использования деревянных поленьев. Его конструкция включает в себя топливный блок и декоративную отделку."
        />
        <MyCarousel images={kaminyImg} />
      </Section>
      <Title name="Виды биокаминов" />
      <Section className="flex justify-around p-14 flex-wrap gap-24">
        {demoKaminy.map((item, i) => (
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

export default Kaminy;
