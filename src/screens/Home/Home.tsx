import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import BG from "../../assets/images/background.png";
import Modal from "@/components/ui/Modal/Modal";
import { SendForm } from "@/components/SendForm/SendForm";
import Why from "@/components/Why/Why";
import Title from "@/components/Title/Title";
import Section from "@/components/Section/Section";
import ProductCard from "@/components/ProductCard/ProductCard";
import { WhyItems, cardsData, clients } from "./consts";
import MyCarousel from "@/components/MyCarousel/MyCarousel";
import MyMarquee from "@/components/Marquee/MyMarquee";
// import SideBar from "@/components/SideBar/SideBar";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const [successModal, setSuccessModal] = useState(false);

  const handleCloseSuccess = () => {
    setSuccessModal(false);
  };

  if (successModal) {
    setTimeout(() => {
      setIsOpen(false);
      setSuccessModal(false);
    }, 1500);
  }

  return (
    <Layout
      title="Stroy Level"
      description="Создайте идеальное пространство с нами - лидерами в Бишкеке по лофт перегородкам, душевым перегородкам, потолкам и биокаминам. У нас вы найдете широкий выбор качественных и элегантных решений для вашего дома или офиса. Наша команда экспертов поможет вам воплотить ваши дизайнерские идеи в реальность. Независимо от того, нужны вам стильные перегородки, функциональные душевые, впечатляющие потолки или уютные биокамины - мы готовы сделать ваше пространство идеальным. Закажите у нас прямо сейчас и преобразите ваш дом в мечту!"
    >
      <Hero background={BG} handleOpen={handleOpen} />
      <Modal onClose={handleClose} title="Оформить замер" isOpen={isOpen}>
        <SendForm setState={setSuccessModal} />
      </Modal>
      <Modal
        title="Ваш заказ оформлен!"
        onClose={() => {
          handleCloseSuccess();
          handleClose();
        }}
        isOpen={successModal}
      >
        <center>
          <img
            style={{ margin: "4% 0" }}
            width={200}
            src="https://www.easy-gst.in/wp-content/uploads/2017/07/success-icon-10.png"
            alt="success_image"
          />
          <p className="text-xl text-center font-semibold">
            Наш менеджер свяжется с вами в ближайшее время!
          </p>
        </center>
      </Modal>
      <Title name="Наши изделия" />
      <div className="md:hidden">
        <Section className="p-14 flex justify-center">
          <MyCarousel cards={cardsData} />
        </Section>
      </div>
      <div className="hidden md:flex">
        <Section className="section_cards hidden md:block">
          {cardsData.map((item, i) => (
            <ProductCard
              key={i}
              title={item.title}
              desc={item.desc}
              image={item.image}
              link={item.link}
            />
          ))}
        </Section>
      </div>
      <Title name="Наши клиенты" />
      <Section className="py-16">
        <MyMarquee elem={clients} />
        {/* <Why /> */}
      </Section>
    </Layout>
  );
}
