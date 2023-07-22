import { Link } from 'react-router-dom';
import { LinkWrap, Wrap } from './Home.styled';

export default function Home() {
  return (
    <Wrap>
      <p>
        Welcome to the Phonebook!
        <br />
        To continue please login or register!
      </p>
      <hr />

      <LinkWrap>
        <Link to="authentication/login" style={{ marginRight: '10px' }}>
          Login
        </Link>

        <Link to="authentication/register">Register</Link>
      </LinkWrap>
    </Wrap>
  );
}
