import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
