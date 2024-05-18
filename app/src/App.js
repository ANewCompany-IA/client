import Header from './Header';

function App() {
  return (
    <div className="App relative h-screen text-gray-900 bg-gray-100 flex flex-col items-center px-[15%]">
      <Header className="px-[15%] h-[10%]"/>
      <div className="content mt-[35%] md:mt-[11%]">
        Example content
      </div>
    </div>
  );
}

export default App;
