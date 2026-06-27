import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import {
  Shield,
  Heart,
  Users,
  HandHeart,
  Eye,
  Scale,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety and Security",
    desc: "Ensuring the protection and well-being of all individuals in our programs.",
  },
  {
    icon: Scale,
    title: "Dignity, Human Rights and Justice",
    desc: "Every person has the right to a dignified life, free of abuse, discrimination and oppression. Upholding human rights is fundamental in alleviating poverty, bringing justice and peace.",
  },
  {
    icon: Heart,
    title: "Compassion and Commitment",
    desc: "We are dedicated to working with those who are suffering, unable to speak up, and living in isolated areas. We go the extra mile to reach those who may have been forgotten.",
  },
  {
    icon: Users,
    title: "Inclusion and Diversity",
    desc: "We believe in the value and power of diversity and inclusion within the communities where we work as well as within our own workforce.",
  },
  {
    icon: HandHeart,
    title: "Meaningful Participation",
    desc: "Sustainable development is based on meaningful participation of all people regardless of gender, age and ability. People are part of decision-making and can hold duty-bearers to account.",
  },
  {
    icon: Eye,
    title: "Transparency and Accountability",
    desc: "Strongly committed to transparency and accountability to people, communities, partners and donors. We set high quality standards and regularly monitor our efforts.",
  },
  {
    icon: HeartHandshake,
    title: "Humanitarian Principles",
    desc: "We provide support irrespective of race, religion, ethnicity, age, gender, sexual orientation or political conviction — subscribing to humanity, neutrality, impartiality and independence.",
  },
];

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-dark py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-gold mb-4">
            Privacy Policy & Values
          </h1>
          <p className="text-gold-light/60 max-w-2xl mx-auto text-lg">
            Our guiding principles that shape every program, decision, and interaction.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gender Justice */}
      <section className="bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Gender Justice" />
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              We believe that women and men are co-responsible stewards of creation. Gender justice is expressed through equality and balanced power relations between women, girls, men and boys. We are committed to eliminating institutional, cultural and interpersonal systems of privilege and oppression that sustain discrimination.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Women and girls form the majority of those living in poverty in our communities. They have limited access to productive resources, are exposed to various forms of discrimination, violence and exploitation. Transforming gender and power relations is critical to ending poverty and challenging inequality.
            </p>
            <div className="bg-card rounded-xl p-6 border-l-4 border-primary">
              <p className="text-sm text-foreground font-medium italic">
                "In this strategic period, RECORD reaffirms its commitment to ensure that gender considerations and related actions are integrated in all our programs work."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
