import { Link } from 'react-router-dom';

export default function AppPage() {
  return (
    <div className='container'>
      <h1>welcome to the frontend app</h1>
      <ul>
        <li>
          <Link to='htmlquestionpage'>HTML</Link>
        </li>
        <li>
          <Link to='cssquestionpage'>CSS</Link>
        </li>
        <li>
          <Link to='javascriptquestionpage'>Javascript</Link>
        </li>
        <li>
          <Link to='accessibilityquestionpage'>Accessibility</Link>
        </li>
      </ul>
    </div>
  );
}
