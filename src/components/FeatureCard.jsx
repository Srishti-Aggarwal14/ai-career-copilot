function FeatureCard(props) {
  return (
    <div className="card">
      <h2>{props.icon}</h2>
      <h3>{props.title}</h3>
    </div>
  );
}

export default FeatureCard;