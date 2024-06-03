import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <div>
        404 Not Found
        <Link to='/'>Home from Link</Link>
      </div>
      ,
    </div>
  );
}

export default NotFoundPage;
