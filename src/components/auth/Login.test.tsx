import {  render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Login from "./Login"
import { expect } from "vitest";
 

const formData ={
    username:'mangesh123',
    password:'12345'
}

// 

// 1) getBYRole
// 2) getByLabelText
// 3) getByPlaceHolder

//

describe('Login Form',()=>{
    test('renders correclty', () => {
        render(<Login />)
        const loginHeading = screen.getByRole('heading', {
            level: 1, name: /Welcome to tree foundation/i
        })

        const logo = screen.getByAltText("logo")
        
        

        const userNameLabel =screen.getByRole('label', { name: /Enter Your Name/i }); 
        const userPasswordLabel = screen.getByRole('label', { name: /Enter Your Password/i })

        const userNameInput = screen.getByRole('textbox',{
            name:/username/i
        })

        const userPasswordInput = screen.getByLabelText(/userPassword/i)

        const loginButton = screen.getByRole('button')


        expect(loginHeading).toBeInTheDocument()
        expect(logo).toBeInTheDocument()

        expect(userNameLabel).toBeInTheDocument()
        expect(userPasswordLabel).toBeInTheDocument()

        expect(userNameInput).toBeInTheDocument()
        expect(userPasswordInput).toBeInTheDocument()
        expect(loginButton).toBeInTheDocument()

        
    })

    
    test("input should change on change", async () => {
        render(<Login />)
        const userNameInput = screen.getByRole('textbox',{
            name:/userName/i
        })

        const userPasswordInput = screen.getByRole('textbox', {
            name:/userpassword/i
        })

        await userEvent.type(userNameInput,formData.username)
        await userEvent.type(userPasswordInput,formData.username)
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
            name:/username/i
        })

        const userPasswordInput = screen.getByRole('textbox', {
            name:/userpassword/i
        })

        expect(userNameInput).toBe("")
        expect(userPasswordInput).toBe("")

    })

    test("LoginButton should not be disable when input exist", async () => {
        render(<Login />)
        const userNameInput = screen.getByRole('textbox',{
            name:/username/i
        })

        const userPasswordInput = screen.getByRole('textbox', {
            name:/userpassword/i
        })

        const loginButton = screen.getByRole('button')
    
        await userEvent.type(userNameInput,formData.username)
        await userEvent.type(userPasswordInput,formData.username)
        expect(userNameInput).toHaveValue(formData.username)
        expect(userPasswordInput).toHaveValue(formData.password)
        expect(loginButton).not.toBeDisabled()
    })
})


 

 
 
 

