import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import Mock_Data from "../Mocks/restaurantListMock.json";
// import { act } from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

it("Should render Body component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});

it("Should search restaurant list for the searched text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");
  // fireEvent.change(searchInput, { target: { value: "Burger" } });
  await userEvent.type(searchInput,"Burger");

  const searchBtn = screen.getByRole("button", { name: "Search" });
  // fireEvent.click(searchBtn);
  await userEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(4);
});

it("Should show Top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(20);

  const topRatedResBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  fireEvent.click(topRatedResBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(13);
});
