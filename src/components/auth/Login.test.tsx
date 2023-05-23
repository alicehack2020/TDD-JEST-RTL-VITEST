import {  render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Login from "./Login"
import { expect } from "vitest";
 

const formData ={
    username:'mangesh123',
    password:'12345'
}

 

describe('Login Form',()=>{

 
    test('renders correclty', () => {
        render(<Login />)
        const loginHeading = screen.getByRole('heading', {
            level: 1, name: /Welcome to tree foundation/i
        })

        const logo = screen.getByAltText("logo")
        const userNameInput = screen.getByRole('textbox',{
            name:/Enter Your Name/i
        })
        const userPasswordInput = screen.getByLabelText(/Enter Your Password/i)
         const loginButton = screen.getByRole('button')


        expect(loginHeading).toBeInTheDocument()
        expect(logo).toBeInTheDocument()
        expect(userNameInput).toBeInTheDocument()
        expect(userPasswordInput).toBeInTheDocument()
        expect(loginButton).toBeInTheDocument()

        
    })

    
    test("input should change on change", async () => {
        render(<Login />)
        const userNameInput = screen.getByRole('textbox',{
            name:/Enter Your Name/i
        }) as HTMLElement
        const userPasswordInput = screen.getByLabelText(/Enter Your Password/i)  

        await userEvent.clear(userNameInput); // Clear the input before typing
        await userEvent.type(userNameInput,formData.username)
        await userEvent.type(userPasswordInput, formData.password)
        
        expect(userNameInput).toHaveValue(formData.username)
        expect(userPasswordInput).toHaveValue(formData.password)
         
    })

    test("login button should disable initially", () => {
        render(<Login />)
        const loginButton = screen.getByRole("button", {name:/login/i})
        expect(loginButton).toBeDisabled()
    })

    test("input should be empty initially", () => {
        render(<Login />)
        const userNameInput = screen.getByRole('textbox',{
            name:/Enter Your Name/i
        }) as HTMLElement

        const userPasswordInput = screen.getByLabelText(/Enter Your Password/i)  

        expect(userNameInput).toHaveValue("")
        expect(userPasswordInput).toHaveValue("")

    })

    test("LoginButton should not be disable when input exist", async () => {
        render(<Login />)
        const userNameInput = screen.getByRole('textbox',{
            name:/Enter Your Name/i
        })

        const userPasswordInput = screen.getByLabelText(/Enter Your Password/i)
        const loginButton = screen.getByRole('button')

        await userEvent.clear(userNameInput); // Clear the input before typing
        await userEvent.type(userNameInput,formData.username)
        await userEvent.type(userPasswordInput,formData.password)
        expect(userNameInput).toHaveValue(formData.username)
        expect(userPasswordInput).toHaveValue(formData.password)
        expect(loginButton).not.toBeDisabled()
    })
})
   






 

 
 
 

