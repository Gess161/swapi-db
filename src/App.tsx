import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsRequest } from "./redux/actions/filmsActions";
import { fetchPeopleRequest } from "./redux/actions/peopleActions";

export default function App() {
  const dispatch = useDispatch()

  const test = () => {
    dispatch(fetchFilmsRequest())
  }
  const test2 = () => {
    dispatch(fetchPeopleRequest())
  }
  const state: any = useSelector(state => state)
  const films = state.rootReducer.filmsReducer.films

  return (
    <div className="App">
      <button onClick={test}>Get films</button>
      <button onClick={test2}>Get people</button>
      <div>{films.length > 0 ? films.map((film: any) => film.title) : "click btn"}</div>
    </div>
  );
}
