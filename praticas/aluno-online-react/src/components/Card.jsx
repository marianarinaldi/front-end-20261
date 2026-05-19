function Card(props) {
  return (
    <article>
      <header>{props.titulo}</header>
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
