// import Home from "../pages/Home";
// import { render, fireEvent, screen } from "@testing-library/react";
// import { useNavigate } from "react-router-dom";

// // Mocking useNavigate
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: jest.fn(),
// }));

// describe("Home Component", () => {
//   beforeEach(() => {
//     (useNavigate as jest.Mock).mockClear();
//   });

//   test("renders page header correctly", () => {
//     render(<Home />);

//     expect(screen.getByText("Popular Titles")).toBeInTheDocument();
//     expect(
//       screen.getByRole("heading", { name: "Popular Titles" })
//     ).toBeInTheDocument();
//     expect(screen.getByTestId("page-header")).toHaveTextContent(
//       "Popular Titles"
//     );
//   });

//   test("renders link cards correctly", () => {
//     render(<Home />);

//     expect(screen.getByText("SERIES")).toBeInTheDocument();
//     expect(screen.getByText("MOVIES")).toBeInTheDocument();
//   });

//   test("clicking on SERIES link card navigates to /series", () => {
//     render(<Home />);

//     fireEvent.click(screen.getByText("SERIES"));

//     expect(useNavigate).toHaveBeenCalled();
//     expect(useNavigate).toHaveBeenCalledWith("/series");
//   });

//   test("clicking on MOVIES link card navigates to /movies", () => {
//     render(<Home />);

//     fireEvent.click(screen.getByText("MOVIES"));

//     expect(useNavigate).toHaveBeenCalled();
//     expect(useNavigate).toHaveBeenCalledWith("/movies");
//   });
// });
