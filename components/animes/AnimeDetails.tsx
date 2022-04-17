const AnimeDetails: React.FC<{
  image: string;
  title: string;
  genre: string;
}> = (props) => {
  return (
    <section>
      <div className="detail-container">
        <img src={props.image} alt={props.title} width="500px" height="300px" />

        <div className="text-container">
          <h1>{props.title}</h1>
          <p>{props.genre}</p>
        </div>
      </div>
    </section>
  );
};

export default AnimeDetails;
