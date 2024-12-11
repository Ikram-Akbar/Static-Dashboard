import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div className="flex w-full"> 
      <Sidebar />
      <main className="w-full">
        <Header />
        <Content />
      </main>
    </div>
  );
};

export default App;