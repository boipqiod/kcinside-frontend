import {useNavigate} from 'react-router-dom';

export const AboutPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={onClick}>Home</button>
    </div>
  );
};
