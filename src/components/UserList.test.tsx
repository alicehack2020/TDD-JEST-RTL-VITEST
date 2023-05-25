 import { render,screen } from '../test/Test-utils';
import UserList from './UserList';
 

type UserType = {
  image: string;
  firstName: string;
};

const users: UserType[] = [
  { image: 'https://robohash.org/hicveldicta.png', firstName: 'Terry' },
  { image: 'https://robohash.org/doloremquesintcorrupti.png', firstName: 'Sheldon' },
  { image: 'https://robohash.org/consequunturautconsequatur.png', firstName: 'Terrill' },
];

describe('UserCard', () => {
  test('render images', () => {
    render(<UserList users={users} />);
     users.forEach((item) => {
      const imageElement = screen.getByAltText(item.image) as HTMLImageElement;
      expect(imageElement.src).toContain(item.image);
    });
  });

  test('renders first name', () => {
    render(<UserList users={users} />);
    users.forEach((item) => {
      const firstNameElement = screen.getByText(item.firstName);
      expect(firstNameElement).toBeInTheDocument();
    });
  });
  
  test('renders first name', () => {
    render(<UserList users={users} />);
    expect(screen.getByText(users[1].firstName)).toBeInTheDocument();
  });  

  test('checks if the users data is present', () => {
    render(<UserList users={users} />);
    const userElements = screen.queryAllByRole('heading', {level:3});
    expect(userElements.length).toBe(users.length);
  });
});
