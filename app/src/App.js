import Header from './Header';

function App() {
  return (
    <div className="App relative h-screen text-gray-900 bg-gray-100 flex flex-col items-center px-[15%]">
      <Header className="px-[15%] h-[10%]" />
      <div className="content mt-[35%] md:mt-[11%] w-full">
        <div className="best-sellers-section text-left">
          <h2>Best-selling</h2>
          <div className="best-sellers-products">
            <div className="product">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
