import { render, screen } from "@testing-library/react"
import NavBar from "./NavBar.tsx"

test("home should be render", () => {
    render(<NavBar />)
    const home = screen.getByText(/home/i)
    expect(home).toBeInTheDocument()
})
test("login should be render", () => {
    render(<NavBar />)
    const home = screen.getByText(/login/i)
    expect(home).toBeInTheDocument()
})