 interface UserType {
  firstName: string;
  image: string;
}

interface HomeProps {
  users: UserType[];
}

const UserList = ({ users }: HomeProps) => {
   
  return (
    <>
      <h1>User List</h1>
      <div className="p-10">
        <div className="grid grid-cols-3 gap-4">
          {users.map((e: UserType, index) => (
            <div key={index} className="flex items-center justify-between flex-col">
              <div className="w-2/4 h-26 overflow-hidden">
                <img src={e?.image} alt={e?.image} className="w-full object-fill overflow-hidden" />
              </div>
              <h3>{e?.firstName}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
