import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { ChevronLeft, ChevronRight, Shield, Users, TreePine, Brain } from "lucide-react";

const carouselImages = [
  "https://res.cloudinary.com/dqiywiqk0/image/upload/v1775811755/corousel-img1_qsl5cp.png",
  "https://res.cloudinary.com/dqiywiqk0/image/upload/v1775811756/corousel-img2_rivftv.png",
  "https://res.cloudinary.com/dqiywiqk0/image/upload/v1775811755/corousel-img3_ph4now.png",
  "https://res.cloudinary.com/dqiywiqk0/image/upload/v1775811757/corousel-img4_iwjs1s.png",
  "https://res.cloudinary.com/dqiywiqk0/image/upload/v1775811758/corousel-img5_yybgdh.png",
  "https://res.cloudinary.com/dqiywiqk0/image/upload/v1775811758/corousel-img6_a0gxko.png",
];

const approaches = [
  { icon: Brain, title: "Community Based Psychosocial Support (CBPS)", desc: "Engagement with local capacities and resources for mental health and well-being." },
  { icon: Shield, title: "Rights Based Approach (RBA)", desc: "Empowering communities through recognition and protection of human rights." },
  { icon: Users, title: "Youth Engagement through Talent Development", desc: "Nurturing young potential through creative and professional development." },
  { icon: TreePine, title: "Disaster Risk Reduction", desc: "Climate Change Adaptation, Ecosystem Management and community resilience." },
];

const services = [
  "Facilitate Community Based Psychosocial Support (CBPS) through engagement with local capacities and resources.",
  "Conflict sensitive programming and operation.",
  "Awareness raising on peace building, reconciliation programmes among refugees and host community.",
  "Community sensitizations for resilience building through positive coping mechanisms.",
  "Facilitate dialogues on major psychosocial and arising conflict issues.",
  "Care and support to enhance the psychosocial well-being of communities affected by HIV/AIDS, poverty and war.",
  "Individual and group psychotherapy for refugees and host community at risk.",
  "Community Managed Disaster Risk Reduction (CMDRR) through Climate Change Adaptation (CCA) and Ecosystem Management.",
];

const interventions = [
  "Psycho-social support through group therapy using WHO's Self Help Plus (SH+).",
  "Door to door sensitization on COVID-19, SGBV, child abuse and food security.",
  "Information dissemination and community mobilization with partners.",
  "Capacities building of youth on Community Based Psycho-social Support.",
];

const WhatWeDo = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Carousel Banner */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {carouselImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`RECORD activities ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-card max-w-2xl">
              What We Do
            </h1>
            <p className="text-gold-light mt-2 text-lg">
              RECORD's response to community challenges
            </p>
          </div>
        </div>
        {/* Controls */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-2 hover:bg-card transition"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % carouselImages.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-2 hover:bg-card transition"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-card/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Approaches */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Approaches" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((a) => (
              <div
                key={a.title}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition">
                  <a.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Interventions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="RECORD's Current Interventions"
            subtitle="During the COVID-19 outbreak, RECORD is making information and resources available, offering encouragement to its beneficiaries."
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-center mb-8">
              This is a time to show solidarity with one another, to practice love and self-discipline, to remain connected while keeping safe distance.
            </p>
            <div className="space-y-4">
              {interventions.map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-lg bg-accent border border-border">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                Where can I find reliable information?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Follow instructions from the Ministry of Health and presidential directives. The World Health Organization coordinates the global response — follow their website for detailed information.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                What can I do?
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Follow the advice of local and global health authorities.</li>
                <li>• Pray for each other, particularly for communities at the epicenter.</li>
                <li>• Consider donating to support RECORD's work.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
