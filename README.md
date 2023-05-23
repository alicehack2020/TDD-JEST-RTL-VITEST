# Test Driven Development 
    1.RTL
    2.JEST
    3.VITEST

# Test priority 
    1.getBYRole
    2.getByLabelText
    3.getByPlaceHolder


 # Example

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