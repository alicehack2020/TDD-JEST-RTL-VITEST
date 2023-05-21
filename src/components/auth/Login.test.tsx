import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"
import { expect } from "vitest";
 


//render check
test("welcome to tree foundation heading should be render", () => {
    render(<Login />)
    const heading = screen.getByTestId("welcome")
    expect(heading).toBeInTheDocument()
})

test("welcome to tree foundation heading should match", () => {
    render(<Login />);
    const heading = screen.getByTestId("welcome");
    expect(heading.textContent).toMatch(/Welcome to tree foundation/i);
});

test("logo should be render", () => {
    render(<Login />)
    const heading = screen.getByTestId("logo")
    expect(heading).toBeInTheDocument()
})



//label
test("userName label should be present/render", () => {
    render(<Login />)
    const userNameLabel = screen.getByTestId('user name label')
    expect(userNameLabel).toBeInTheDocument()
})

test("userPassword label should be present/render", () => {
    render(<Login />)
    const userPasswordLabel = screen.getByTestId('user password label')
    expect(userPasswordLabel).toBeInTheDocument()
})


//input,button
test("userName input should be present/render", () => {
    render(<Login />)
    const userNameInput = screen.getByPlaceholderText('Enter Your Name')
    expect(userNameInput).toBeInTheDocument()
})

test("userPassword input should be present/render", () => {
    render(<Login />)
    const userPasswordInput = screen.getByPlaceholderText('Enter Your Password')
    expect(userPasswordInput).toBeInTheDocument()
})

test("loginButton should be present/render", () => {
    render(<Login />)
    const loginButton = screen.getByTestId('loginButton')
    expect(loginButton).toBeInTheDocument()
})

//button initially disabled
test("login button should disable initially", () => {
    render(<Login />)
    const loginButton = screen.getByTestId("loginButton")
    expect(loginButton).toBeDisabled()
})


// input empty initially
test("userName should be empty initially", () => {
    render(<Login />)
    const userNameInput = screen.getByPlaceholderText('Enter Your Name')
    expect(userNameInput.textContent).toBe("")
})

test("userPassword should be empty initially", () => {
    render(<Login />)
    const userPasswordInput = screen.getByPlaceholderText('Enter Your Password')
    expect(userPasswordInput.textContent).toBe("")
})

//value should change using on change
test("userName input should change", () => {
    render(<Login />)
    const userNameInput = screen.getByPlaceholderText('Enter Your Name') as HTMLInputElement
    const testuser = "mangesh"
    fireEvent.change(userNameInput,{target:{value:testuser}})
    expect(userNameInput.value).toBe(testuser)
})
test("userPassword input should change", () => {
    render(<Login />)
    const userPasswordInput = screen.getByPlaceholderText('Enter Your Password') as HTMLInputElement
    const testPassword = "Pass@1234"
    fireEvent.change(userPasswordInput,{target:{value:testPassword}})
    expect(userPasswordInput.value).toBe(testPassword)
})



//if user name and password empty then loginButton should disabled
test("LoginButton should not be disable when input exist", () => {
    render(<Login />)
    const userNameInput = screen.getByPlaceholderText('Enter Your Name') as HTMLInputElement
    const userPasswordInput = screen.getByPlaceholderText('Enter Your Password') as HTMLInputElement

    const loginButton = screen.getByTestId("loginButton")

    const testuser = "mangesh"
    const testPassword = "Pass@1234"

    fireEvent.change(userNameInput, { target: { value: testuser } }) 
    fireEvent.change(userPasswordInput, { target: { value: testPassword } })
    
    expect(userNameInput.value).toBe(testuser)
    expect(userPasswordInput.value).toBe(testPassword)

    expect(loginButton).not.toBeDisabled()
})


