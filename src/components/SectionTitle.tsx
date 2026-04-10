const SectionTitle = ({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={`mb-10 ${centered ? "text-center" : ""}`}>
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
      {title}
    </h2>
    <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;
