import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestion = () => {
  const { suggestedMovieNames, movieNameResult } = useSelector(
    (store) => store.gpt
  );

  if (!movieNameResult) {
    return null;
  }
  return (
    <div className="">
      {suggestedMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieNameResult[index]}
        />
      ))}
    </div>
  );
};

export default GptSuggestion;
