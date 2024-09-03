import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('User'));
  console.log(typeof user);
  const history = useHistory();
  if (user === null || JSON.stringify(user) === '{}') {
    history.push('/sign-up');
    return;
  }
  return (
    <div>
      <h1>Previous Orders are displayed here</h1>
      <button
        onClick={() => {
          const users = JSON.parse(localStorage.getItem('Users'));
          console.log(users);
          const data = users.filter((a) => a.UseN !== user.UseN);
          data.push(user)

          localStorage.setItem('Users', JSON.stringify(data));
          localStorage.setItem('User', JSON.stringify({}));
          history.push('/login');
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Profile;
