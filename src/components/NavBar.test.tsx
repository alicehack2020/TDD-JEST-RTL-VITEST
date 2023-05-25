import { render, screen,expect, vi,user, userEvent } from "../test/Test-utils";
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

  //  test("navigation to home page", async () => {
  //       render(<NavBar/>);
  //       const user = userEvent.setup();
  //       const homeLink = screen.getByRole("link", { name: /login/i });
  //       await user.click(homeLink);
  //       expect(screen.getByRole('heading', {
  //           level:1,name:/Welcome To Tree Foundation/i
  //       })).toBeInTheDocument();
        
  //   });
});
