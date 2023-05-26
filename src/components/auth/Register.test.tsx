import { screen, render, userEvent } from "../../test/Test-utils"
import Register from "./Register"
const optionData = ["", "male", "female", "other"]

const formData ={
    fname: 'mangesh',
    lname: "pandit",
    email: 'm@gmail.com',
    password: '12345',
    mobile:1234567890
}
describe("Registration form", () => {
    test("input should render", () => {
        render(<Register/>)
        const heading=screen.getByRole('heading',{level:1,name:/Registration Form/i})
        const Fname = screen.getByRole('textbox', {name: /First Name/i})
        const Lname = screen.getByRole('textbox',{name:/Last Name/i})
        const Email = screen.getByRole('textbox', { name: /Email address/i })
        const Password = screen.getByLabelText(/Password/i)
        const Mobile = screen.getByRole('spinbutton',{ name:/Mobile Number/i})
   
        const Gender = screen.getByLabelText("Select Gender") as HTMLSelectElement;
        const Genderoptions = Array.from(Gender.options).map((option) => option.value);
        const RegisterButton=screen.getByRole('button',{name:/Register/i})
       
        expect(heading).toBeInTheDocument()
        expect(Fname).toBeInTheDocument()
        expect(Lname).toBeInTheDocument()
        expect(Email).toBeInTheDocument()
        expect(Password).toBeInTheDocument()
        expect(Mobile).toBeInTheDocument()
        expect(Genderoptions).toEqual(optionData);
        expect(RegisterButton).toBeInTheDocument()
         
    })
   
    test("submit button should disable if inputs are empty", () => {
        render(<Register/>)
        const Fname = screen.getByRole('textbox', {name: /First Name/i})
        const Lname = screen.getByRole('textbox',{name:/Last Name/i})
        const Email = screen.getByRole('textbox', { name: /Email address/i })
        const Password = screen.getByLabelText(/Password/i)
        const Mobile = screen.getByRole('spinbutton',{ name:/Mobile Number/i}) as HTMLElement
        const RegisterButton=screen.getByRole('button',{name:/Register/i})
        
       
        expect(Fname).toHaveValue("")
        expect(Lname).toHaveValue("")
        expect(Email).toHaveValue("")
        expect(Password).toHaveValue("")
        expect(Mobile.value).toHaveLength(0)
       
        expect(RegisterButton).toBeDisabled() 
    })

    test("submit button should not disable if inputs exits", async () => {
        render(<Register/>)
        const Fname = screen.getByRole('textbox', {name: /First Name/i})
        const Lname = screen.getByRole('textbox',{name:/Last Name/i})
        const Email = screen.getByRole('textbox', { name: /Email address/i })
        const Password = screen.getByLabelText(/Password/i)
        const Mobile = screen.getByRole('spinbutton',{ name:/Mobile Number/i}) as HTMLElement
        const RegisterButton=screen.getByRole('button',{name:/Register/i})
         
        await userEvent.clear(Fname); // Clear the input before typing
        await userEvent.type(Fname,formData.fname)
        await userEvent.type(Lname,formData.lname)
        await userEvent.type(Email,formData.email)
        await userEvent.type(Password,formData.password)
        await userEvent.type(Mobile,formData.mobile.toString())
       
        expect(Fname).toHaveValue(formData.fname)
        expect(Lname).toHaveValue(formData.lname)
        expect(Fname).toHaveValue(formData.fname)
        expect(Email).toHaveValue(formData.email)
        expect(Password).toHaveValue(formData.password)
        expect(Mobile).toHaveValue(formData.mobile)
        expect(RegisterButton).not.toBeDisabled()
    })
})



// const Gender = screen.getByLabelText("Select Gender") as HTMLSelectElement;
// const Genderoptions = Array.from(Gender.options).map((option) => option.value);
// expect(Genderoptions[0]).toHaveValue()   

    
 
