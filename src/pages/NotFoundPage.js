import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Page not found <Link to="/">to Home</Link>
    </div>
  );
}
