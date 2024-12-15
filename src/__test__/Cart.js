import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_MENU_DATA from "../Mocks/mockRestaurantMenu.json";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";

// Mocking the fetch API with successful and failed responses
const mockFetchSuccess = () =>
  jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_MENU_DATA),
    })
  );

const mockFetchFailure = () =>
  jest.fn(() => Promise.reject(new Error("Failed to fetch menu data")));

// Reusable rendering helper
const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <Provider store={appStore}>{ui}</Provider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  // Reset the fetch mock before each test
  jest.clearAllMocks();
});

describe("Restaurant Menu Component", () => {
  test("renders the menu and interacts with the cart", async () => {
    global.fetch = mockFetchSuccess();

    renderWithProviders(
      <>
        <Header />
        <RestaurantMenu />
        <Cart />
      </>
    );

    // Verify the menu renders correctly
    expect(screen.findByText("Biriyani (5)")).toBeInTheDocument();

    // Expand the menu
    const accordionHeader = screen.getByText("Biriyani (5)");
    userEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems).toHaveLength(5);

    // Add items to the cart
    const addButtons = screen.getAllByRole("button", { name: "Add +" });
    await userEvent.click(addButtons[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    await userEvent.click(addButtons[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    // Verify updated menu item count
    expect(screen.getAllByTestId("foodItems")).toHaveLength(7);

    // Clear the cart
    const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
    userEvent.click(clearCartButton);

    expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems")).toHaveLength(5);
  });

  test("handles clearing an empty cart gracefully", async () => {
    global.fetch = mockFetchSuccess();

    renderWithProviders(
      <>
        <Header />
        <RestaurantMenu />
        <Cart />
      </>
    );

    // Clear the cart when it's already empty
    const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
    userEvent.click(clearCartButton);

    expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
  });

  test("handles API call failure gracefully", async () => {
    global.fetch = mockFetchFailure();

    renderWithProviders(<RestaurantMenu />);

    // Verify error message is displayed when fetch fails
    await waitFor(() =>
      expect(screen.getByTestId("shimmer-container")).toBeInTheDocument()
    );
  });
});
