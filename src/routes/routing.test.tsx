import {screen} from "../test/Test-utils";
import { RouterProvider,createMemoryRouter } from 'react-router-dom';
import { routes } from "./router";
import { render } from "@testing-library/react";
 
const routerData = [
    {
        path: "/",
        headingTitle:'Welcome to home'
        
    },
    {
      path: "/login",
      headingTitle:'Welcome To Tree Foundation'
    }

]

function assert(headingTitle:string){
   return screen.getByRole('heading', { level: 1, name: headingTitle })
}



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
        expect(assert.call(route,route.headingTitle)).toBeInTheDocument();
      });
    });
  });






 

