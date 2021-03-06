import React from "react";
import Card from "./Card";

const numbers = [1, 2, 3, 4, 5, 6];

const movies = [
    { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg" },
    { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
    { id: "z2uykusRE", title: "Titanic", director: "James Cameron" }
  ];

export const listItems = numbers.map(value => <li key={value}>{value}</li>);

export const MoviesList = () => {
    return (
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Card title={item.title} director={item.director} />
          </li>
        ))}
      </ul>
    );
  };