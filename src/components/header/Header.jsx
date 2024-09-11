
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: 'Login', slug: "/login", active: !authStatus },
    { name: 'Signup', slug: "/signup", active: !authStatus },
    { name: 'All Posts', slug: "/all-posts", active: authStatus },
    { name: 'Add Post', slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md">
  <Container>
    <nav className="flex items-center justify-between">
      {/* Logo Section */}
      <div className="mr-4">
        <Link to="/" className="flex items-center">
          <Logo width="80px" />
        </Link>
      </div>

      {/* Navigation Items */}
      <ul className="flex items-center space-x-6">
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className="px-6 py-2 bg-gradient-to-r from-light-blue-400 to-light-green-400 text-white font-semibold rounded-full shadow-lg hover:from-light-blue-500 hover:to-light-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>
    </nav>
  </Container>
</header>

  );
}

export default Header;
