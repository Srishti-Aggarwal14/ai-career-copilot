import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    { icon: "📄", title: "Resume Analyzer" },
    { icon: "📊", title: "ATS Checker" },
    { icon: "🎤", title: "Mock Interview" },
    { icon: "💻", title: "DSA Tracker" },
    { icon: "🤖", title: "AI Career Chatbot" },
    { icon: "📈", title: "Placement Analytics" },
    { icon: "📝", title: "Resume Builder" },
    { icon: "🎯", title: "Job Recommendations" },
  ];

  return (
    <section className="features">
      <h2>Features</h2>

      <div className="cards">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;