import "./Section_styles.css";

const Section = (props) => {
  return (
    <section className="sectionCard">
      <h1 className="sectionCard-title">{props.name}</h1>
      <span>{props.content}</span>
    </section>
  );
};

export default Section;
