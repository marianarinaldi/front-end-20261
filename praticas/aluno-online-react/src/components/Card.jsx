function Card(props) {
  return (
    <article className="dashboard-card">
      <h2>{props.titulo}</h2>
      <section>
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Card;
