import { render, screen} from "../test/Test-utils";
import Form from "./Form";

const optionData=["", "yes", "no"]

describe("Form", () => {
  it("should render select options for select as YES and No", () => {
    render(<Form />);
    
    const codingSelect = screen.getByLabelText("Do you like coding?") as HTMLSelectElement;
    const codingoptions = Array.from(codingSelect.options).map((option) => option.value);
    const gamingSelect = screen.getByLabelText("Do you like gaming?") as HTMLSelectElement;
    const gamingoptions = Array.from(gamingSelect.options).map((option) => option.value);

    expect(codingoptions).toEqual(optionData);
    expect(gamingoptions).toEqual(optionData);
  });
});
