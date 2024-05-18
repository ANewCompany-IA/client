import Header from './Header';
import Carousel from 'react-multi-carousel';
import Product from './Product';

function App() {
  const productsCarouselResponsivity = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const products = [
    {
      name: 'T-Shirt',
      img: 'product-example.jpg',
      organization: 'Brand1',
      price: 10
    },
    {
      name: 'T-Shirt2',
      img: 'product-example.jpg',
      organization: 'Brand1',
      price: 10
    },
    {
      name: 'T-Shirt3',
      img: 'product-example.jpg',
      organization: 'Brand1',
      price: 15
    },
    {
      name: 'T-Shirt3',
      img: 'product-example.jpg',
      organization: 'Brand1',
      price: 15
    },
    {
      name: 'T-Shirt3',
      img: 'product-example.jpg',
      organization: 'Brand1',
      price: 15
    },
    {
      name: 'T-Shirt3',
      img: 'product-example.jpg',
      organization: 'Brand1',
      price: 15
    },
    {
      name: 'T-Shirt3',
      img: 'product-example.jpg',
      organization: 'Brand1',
      price: 15
    },
    {
      name: 'T-Shirt3',
      img: 'product-example.jpg',
      organization: 'Brand1',
      price: 15
    }
  ];

  return (
    <div className="App relative text-gray-900 bg-gray-100 flex flex-col items-center px-[15%]">
      <Header className="px-[15%] h-[10%]" />
      <div className="content mt-[35%] md:mt-[11vh] w-full">
        <div className="best-sellers-section text-left">
          <h2 className="sticky text-2xl best-sellers-title border-b-2 border-slate-200">Best-selling</h2>
          <div className="best-sellers-products mt-2 w-full">
            <Carousel responsive={productsCarouselResponsivity} infinite={true} autoPlay={true} autoPlaySpeed={6500} swipeable={false} itemClass="flex justify-center">
              { products.map((p, i) => {
                return <Product key={i} img={p.img} name={p.name} organization={p.organization} price={p.price} />
              })}
            </Carousel>
          </div>
        </div>
        <div className="best-sellers-section text-left mt-4">
          <h2 className="sticky text-2xl best-sellers-title border-b-2 border-slate-200">For you</h2>
          <div className="best-sellers-products mt-2 w-full">
            <Carousel responsive={productsCarouselResponsivity} infinite={true} autoPlay={true} autoPlaySpeed={6500} swipeable={false} itemClass="flex justify-center">
              { products.map((p, i) => {
                return <Product key={i} img={p.img} name={p.name} organization={p.organization} price={p.price} />
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
