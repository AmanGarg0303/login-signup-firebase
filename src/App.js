import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import Spinner from "./spinner/Spinner";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <Spinner /> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default App;
