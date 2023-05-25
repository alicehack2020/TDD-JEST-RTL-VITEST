import {screen} from "../test/Test-utils";
import { RouterProvider,createMemoryRouter } from 'react-router-dom';
import { routes } from "./router";
import { render } from "@testing-library/react";
// describe("navigation render", () => {
   
//     test('home page render',async () => {

//         const router = createMemoryRouter(routes,{
//             initialEntries:["/login",'/'],
//             initialIndex:1
//         })
//         render(<RouterProvider router={router} />)
//         expect(screen.getByRole('heading', {
//             level:1,name:/Welcome to home/i
//         })).toBeInTheDocument();
//     })
 
// })

const routerData = [
    {
        path: "/",
        test: () => {
          return screen.getByRole('heading', { level: 1, name: /Welcome to home/i })
        } 
    },
    {
      path: "/login",
       test: () => {
        return screen.getByRole('heading', { level: 1, name: /Welcome To Tree Foundation/i })
      }
    }

]


describe("navigation render", () => {
    test('renders all routes', async () => {
        routerData.forEach((route) => {
        const router = createMemoryRouter(routes, {
          initialEntries: [route.path],
          initialIndex: 0
        });
        render(
          <RouterProvider router={router} />
        );
        expect(route.test()).toBeInTheDocument();
      });
    });
  });






 

