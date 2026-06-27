import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { CheckCircle } from "lucide-react";

const thematicAreas = [
  "Mental Health and Psychosocial Support (MHPSS)",
  "Conflict Transformation, Community Peace Making and Peace Keeping",
  "General Protection (SGBV, Child Protection)",
  "Youth Talent Development & Forum Theatre for Social Change",
  "Community Managed Disaster Risk Reduction (DRR, CCA, EMR)",
  "Financial Literacy",
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative">
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dqiywiqk0/image/upload/v1775810649/advocacy-banner-image_yxayhx.png"
            alt="RECORD Uganda community advocacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-card max-w-2xl leading-tight">
                Refugee Community for Resilience & Development
              </h1>
              <p className="text-gold-light mt-3 text-lg max-w-xl">
                Building capacity and competence to positively change lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="About Us" />
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Inspired by the desire to make significant changes in the lives of communities affected by poverty and disaster, RECORD facilitates community development in Kamwenge District through rights-based empowerment for sustainable development. We serve all people irrespective of ethnicity, gender, religion, race or political conviction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left - Info */}
            <div>
              <div className="bg-accent rounded-xl p-6 mb-8 border border-border">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  We are RECORD Uganda
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Refugee Community For Resilience and Development (RECORD) is an indigenous registered non-governmental organisation with the Head office in Nkoma Katalyeba Town Council, Kamwenge District.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Established in 2019, RECORD is an indigenous non-governmental organization that works in the field of promoting human rights, social justice, equality, community empowerment, democratic ownership and environmental sustainability.
              </p>

              <h4 className="font-heading text-lg font-bold mb-4 text-foreground">
                Main Thematic Areas
              </h4>
              <ul className="space-y-3">
                {thematicAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Map */}
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255344.7584424078!2d30.24!3d0.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x175ef07f0073a56d%3A0x5c0a11d372b0899b!2sKamwenge%20District%2C%20Uganda!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RECORD Uganda Location"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                RECORD works through the Rights Based Approach and focuses on second order change to tackle the defects other than deficits at individual level. Our interventions are guided through respect for diversity, active and meaningful participation, grounding in research and evaluation, empowerment, interdisciplinary collaboration and multilayered support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Participation */}
      <section className="bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Community Participation" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://res.cloudinary.com/dqiywiqk0/image/upload/v1775810985/community-participation-image_ma3yus.png"
                alt="Community participation"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Responding to COVID-19 Challenges
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As an organization RECORD is in talks with communities and other stakeholders as they embark on a process of reviving the Uganda Child helpline 116 — an emergency line for reporting child rights violations that may occur during this period.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Violence against children cases have been on the rise since the lockdown in Uganda begun. As a measure to deter this kind of violence, we are hoping that the presence of a reporting mechanism will discourage perpetrators if they are aware of dire consequences.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <img
              src="https://res.cloudinary.com/dqiywiqk0/image/upload/v1775810967/after-participation-illustration_cup3el.png"
              alt="Community illustration"
              className="max-w-md w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
