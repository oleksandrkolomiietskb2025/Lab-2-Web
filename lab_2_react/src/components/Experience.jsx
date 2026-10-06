function Job({ title, period, duties }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{period}</p>
      <ul>
        {duties.map((d) => <li key={d}>{d}</li>)}
      </ul>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Досвід роботи</h2>
      <p>Немає досвіду роботи.</p>
    </section>
  );
}
export default Experience;
