import { render, screen } from "@testing-library/react";
import MOCK_MENU_DATA from "../Mocks/mockRestaurantMenu.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockApiSuccess = () =>
  jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_MENU_DATA),
    })
  );

// afterEach(()=>{
//     global.fetch.mockClear();
// })

it("Should add items to cart", async () => {
  global.fetch = mockApiSuccess();

  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const user = userEvent.setup();

  await user.click(screen.getAllByLabelText("accordion heading")[0]);

  expect(screen.getAllByTestId("foodItems").length).toBe(16)

  await user.click(screen.getAllByRole("button",{name:"Add +"})[0]);

  screen.getByText("Cart - (1 items)");

  expect(screen.getAllByTestId("foodItems").length).toBe(17)

  await user.click(screen.getAllByRole("button",{name:"Add +"})[1]);

  screen.getByText("Cart - (2 items)");

  expect(screen.getAllByTestId("foodItems").length).toBe(18)

  await user.click(screen.getByRole("button",{name:"Clear Cart"}))

  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(16)
});


