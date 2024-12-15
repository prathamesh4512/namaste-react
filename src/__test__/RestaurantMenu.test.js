import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_MENU_DATA from "../Mocks/mockRestaurantMenu.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
// import { act } from "react";

const mockApiSuccess = () =>
  jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_MENU_DATA),
    })
  );

const mockApiFailure = () =>
  jest.fn(() => Promise.reject(new Error("Failed to fetch menu data")));

afterEach(() => {
  global.fetch.mockClear();
});

it("Should render RestaurantMenu component", async () => {
  global.fetch = mockApiSuccess();

  await act(async () => render(<RestaurantMenu />));

  //Heading is present
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Leon's - Burgers & Wings (Leon Grill)"
  );

  // Sub Heading
  expect(
    screen.getByText("American, Snacks - ₹300 for two", { selector: "p" })
  ).toBeInTheDocument();

  //category list
  expect(screen.getAllByLabelText("accordion heading").length).toBe(10);

  expect(
    screen.getByText("Flame & Grill Burgers (6)", { selector: "span" })
  ).toBeInTheDocument();
});

it("Should render Error component", async () => {
  global.fetch = mockApiFailure();

  await act(async () => render(<RestaurantMenu />));

  expect(screen.getByTestId("error-message")).toBeInTheDocument();
});

it("Should render Shimmer UI", () => {
  render(<RestaurantMenu />);

  expect(screen.getByTestId("shimmer-container")).toBeInTheDocument();
});

it("Should open category accordion on click", async () => {
  global.fetch = mockApiSuccess();

  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const user = userEvent.setup();

  await user.click(screen.getByText("Flame & Grill Burgers (6)"));
  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  await user.click(screen.getByText("NEW: Pocket Friendly Arrivals (16)"));
  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  expect(screen.getByText("Dynamite Longer Burger")).toBeInTheDocument();
  // expect(screen.getByText(`- ₹139`)).toBeInTheDocument()

  expect(screen.getAllByRole("button", { name: "Add +" }).length).toBe(16);
});
