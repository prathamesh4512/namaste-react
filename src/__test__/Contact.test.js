import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";


// Called only 1 time before 1st TC
beforeAll(()=>{
  console.log("BeforeAll")
})

// Called  before each TC, if there are 4 TC, it will be called 4 times
beforeEach(()=>{
  console.log("BeforeEach")
})

// opp of BeforeAll
afterAll(()=>{
  console.log("AfterAll")
})


// opp of BeforeEach
afterEach(()=>{
  console.log("AfterEach")
})


describe("Should load heading, button & 2 input tag inside component", () => {

  beforeAll(()=>{
    console.log("BeforeAll")
  })

  test("Should load heading inside contact", () => {
    render(<Contact />); // render contact in JSDOM

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    // const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument();
  });

  test("should load 2 input tag inside contact", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });
});


it("Should render Contact component correctly",()=>{

  render(<Contact />)

  const heading = screen.getByRole("heading",{level:1,name:"Contact Us Page"});
  expect(heading).toBeInTheDocument()

  const nameInput = screen.getByPlaceholderText("Enter name")
  expect(nameInput).toBeInTheDocument()
  expect(nameInput).toHaveAttribute('type', 'text')

  const ageInput = screen.getByPlaceholderText("Enter age")
  expect(ageInput).toBeInTheDocument()
  expect(ageInput).toHaveAttribute('type', 'text')

  const submitButton = screen.getByRole('button',{name:"Submit"})
  expect(submitButton).toBeInTheDocument()
})

test("Allow user to fill the inputs and click submit", async ()=>{
  render(<Contact />)

  const user = userEvent.setup();

  const nameInput = screen.getByPlaceholderText("Enter name");
  // fireEvent.change(nameInput,{target:{value:"Prathamesh S"}})
  await user.type(nameInput,"Prathamesh S")
  expect(nameInput).toHaveValue("Prathamesh S");

  const ageInput = screen.getByPlaceholderText('Enter age');
  // fireEvent.change(ageInput,{target:{value:"25"}})
  await user.type(ageInput,"25")
  expect(ageInput).toHaveValue('25');

  const submitButton = screen.getByRole('button', { name: 'Submit' });
  // fireEvent.click(submitButton)
  await user.click(submitButton);

  // Additional checks can go here if needed, such as verifying form submission

})


