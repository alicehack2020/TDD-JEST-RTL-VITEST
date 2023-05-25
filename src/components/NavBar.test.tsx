import { render, screen,expect} from "../test/Test-utils";
import NavBar from "./NavBar.tsx";
describe("navbar test cases", () => {
  test("renders correctly", () => {
    render(
        <NavBar />
    );
    const login = screen.getByText(/login/i);
    const home = screen.getByText(/home/i);
    expect(login).toBeInTheDocument();
    expect(home).toBeInTheDocument();
  });
});
