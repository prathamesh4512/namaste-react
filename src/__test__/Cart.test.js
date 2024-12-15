// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { Provider } from "react-redux";
// import appStore from "../utils/appStore";
// import RestaurantMenu from "../components/RestaurantMenu";
// import MOCK_MENU_DATA from "../Mocks/mockRestaurantMenu.json";
// import Header from "../components/Header";
// import Cart from "../components/Cart";
// import { BrowserRouter } from "react-router-dom";

// // Mocking the fetch API with successful and failed responses
// const mockFetchSuccess = () =>
//     jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(MOCK_MENU_DATA),
//       })
//     );
  
//   const mockFetchFailure = () =>
//     jest.fn(() => Promise.reject(new Error("Failed to fetch menu data")));
  
//   // Reusable rendering helper
//   const renderWithProviders = (ui) => {
//     return render(
//       <BrowserRouter>
//         <Provider store={appStore}>{ui}</Provider>
//       </BrowserRouter>
//     );
//   };
  
//   beforeEach(() => {
//     // Reset the fetch mock before each test
//     jest.clearAllMocks();
//   });

//   it("Should render RestaurantMenu component",()=>{
//     renderWithProviders(
//         <RestaurantMenu />
//     )
//   })