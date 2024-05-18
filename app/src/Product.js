function Product(props) {
  return (
    <div className={`product mx-1 my-2 cursor-pointer rounded-md drop-shadow-md transition duration-500 hover:none md:hover:scale-105 px-2 py-1 flex flex-col items-center ${props.className}`}>
      <img className="product-image object-cover rounded-md" src={`${process.env.PUBLIC_URL}/${props.img}`} height="100" alt="" />
      <div className="product-info w-full mt-1 px-2 flex flex-row justify-between">
        <span className="product-name">{props.name}</span>
        <span className="product-price">{`$${props.price}`}</span>
      </div>
      <span className="product-org w-full px-2 text-slate-500">{props.organization}</span>
    </div>
  );
}

export default Product;
