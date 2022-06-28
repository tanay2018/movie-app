import "./App.css";
import Header from "./Header";
import Card from "./Card";
import { useState, useEffect } from "react";

function App() {
  const api_url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=feaec1df63265d1abe0fa9c226701de0&page=1";

  const search_url =
    'https://api.themoviedb.org/3/search/movie?api_key=feaec1df63265d1abe0fa9c226701de0&query="';

  const [data, setdata] = useState();

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setdata((prevdata) => data.results));
  }, []);

  console.log(data);

  function handleSubmit(search) {
    console.log(search);
    if (search && search !== "") {
      console.log("adad");
      fetch(search_url + search)
        .then((res) => res.json())
        .then((data) => setdata((prevdata) => data.results));
    }
  }

  // const cardEl = data.map((item) => <Card item={item} />);

  const cardEle = data && data.map((x) => <Card item={x} />);

  // console.log(cardEl);

  return (
    <div className="app">
      <Header handleSubmit={handleSubmit} />
      <div className="container">{cardEle}</div>
    </div>
  );
}

export default App;
