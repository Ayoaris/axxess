import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { DataType, ResponseDataType } from "./types";
import axios from "axios";

export function getSeries(): UseQueryResult<DataType[], Error> {
  return useQuery({
    queryKey: ["jsonData"],
    queryFn: async () => {
      const response = await axios.get<ResponseDataType[], any>("/db.json");

      const series = response.data.entries
        .filter(
          (el: DataType) =>
            el.programType === "series" && el.releaseYear >= 2010
        )
        .sort((a: DataType, b: DataType) => (a.title > b.title ? 1 : -1));

      return series.slice(0, 21);
    },
  });
}

export function getMovies(): UseQueryResult<DataType[], Error> {
  return useQuery({
    queryKey: ["jsonData"],
    queryFn: async () => {
      const response = await axios.get<ResponseDataType[], any>("/db.json");

      const movies = response.data.entries
        .filter(
          (el: DataType) => el.programType === "movie" && el.releaseYear >= 2010
        )
        .sort((a: DataType, b: DataType) => (a.title > b.title ? 1 : -1));

      return movies.slice(0, 21);
    },
  });
}
