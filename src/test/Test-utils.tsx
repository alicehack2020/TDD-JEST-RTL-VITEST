import React,{ReactElement} from 'react'
import {render,RenderOptions} from '@testing-library/react'
import { BrowserRouter ,MemoryRouter} from 'react-router-dom'
import user from "@testing-library/user-event";
import { expect, vi } from "vitest";
import userEvent from '@testing-library/user-event'
 
const AllTheProviders = ({children}:{children:React.ReactNode}) => {
  return (
    <BrowserRouter >
        {children}
    </BrowserRouter>
  )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })
 

 
  
export * from '@testing-library/react'
export { customRender as render, expect, vi, user, userEvent }
  