import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div>
      <Sidebar />
      <main className="w-full">
        <Header />
        <Content />
      </main>
    </div>
  );
};

export default App;