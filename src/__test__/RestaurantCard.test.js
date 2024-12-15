import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard ,{withPromtedLabel} from "../components/RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json";


it("Should render RestaurantCard component with props data",()=>{

    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

    expect(name).toBeInTheDocument();
})

it("Should render RestaurantCard component with promoted label", ()=>{
    const PromotedRestaurantCard = withPromtedLabel(RestaurantCard)
    render(<PromotedRestaurantCard resData={MOCK_DATA} />)

    const labelWithPromoted = screen.getByText('Promoted', { selector: 'label' });

    expect(labelWithPromoted).toBeInTheDocument()

})