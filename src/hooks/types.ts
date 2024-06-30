enum ProgramEnum {
  series = "series",
  movie = "movie",
}

export type DataType = {
  title: string;
  description: string;
  programType: ProgramEnum;
  images: {
    "Poster Art": {
      height: number;
      url: string;
      width: number;
    };
  };
  releaseYear: number;
};

export type ResponseDataType = {
  total: number;
  entries: DataType[];
};
