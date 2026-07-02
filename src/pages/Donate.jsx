import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Heart, ShieldCheck, Users, HandHeart } from "lucide-react";

const impacts = [
  {
    icon: ShieldCheck,
    title: "Continue Crucial Work",
    desc: "Ensure we can provide life-saving assistance. In refugee camps, your donation helps prevent virus spreading by providing training and essential items.",
  },
  {
    icon: Users,
    title: "Protect Our Staff",
    desc: "Enable continued presence and provide our team with clean water, soap, hand sanitizer, and protective clothing.",
  },
  {
    icon: HandHeart,
    title: "Prevent Another Crisis",
    desc: "Help prevent devastating effects on those we serve. Your funds are used for COVID-19 prevention and response, prioritizing the most exposed programs.",
  },
];

const Donate = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-dark py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <Heart size={40} className="text-secondary" />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-gold mb-4">
            Ways to Give
          </h1>
          <p className="text-gold-light/60 max-w-2xl mx-auto text-lg mb-8">
            We need your support! In emergencies, a fast response is essential. A timely response decides whether a disaster becomes a personal tragedy.
          </p>
          <a
            href="#donate-form"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
          >
            <Heart size={20} />
            Donate Now
          </a>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Your Contribution Matters"
            subtitle="Effective help empowers people to rebuild their livelihoods, improve disaster preparedness, and address the causes of suffering."
          />
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <p className="text-muted-foreground leading-relaxed">
              You may donate to RECORD with a general donation. Your contribution will be used where it is needed most — helping reduce the impact of COVID-19 on our field staff and the communities we serve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Many of our staff are front line workers in hard-to-reach areas poorly equipped to deal with a potential spread of the virus. We are well-known for working closely with communities and we do not want to stop now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {impacts.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="donate-form" className="bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Make a Difference Today"
            subtitle="Every contribution, no matter the size, makes a real impact in the lives of vulnerable communities."
          />
          <div className="bg-card rounded-2xl p-8 md:p-12 max-w-lg mx-auto border border-border shadow-lg">
            <p className="text-muted-foreground mb-6">
              To donate, please contact RECORD directly via email or phone. We will guide you through the process of making your contribution.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground mb-8">
              <p>✉️ <b>refugeecom19@gmail.com</b> </p>
              <p>✉️ busingexpa85@gmail.com</p>
              <p>📞 +256 774 634 532</p>
              <p>📮 P. O. Box 750150</p>
              <p>📍 Nkoma Katalyeba, Kamwenge District</p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              <Heart size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
