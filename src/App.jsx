import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  return (
    <div>
      <h1>Door Management</h1>
      <ItemList />
    </div>
  );
}

export default App;
