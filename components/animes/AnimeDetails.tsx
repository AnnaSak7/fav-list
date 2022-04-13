

const AnimeDetails: React.FC<{image: string, title: string, genre: string, description: string }> = (props) => {
  return (
    <section>
      <img src={props.image} alt={props.title} width="300px" height="300px"/>
      <h1>{props.title}</h1>
      <p>{props.genre}</p>
      <p>{props.description}</p>
    </section>
  );
};

export default AnimeDetails;