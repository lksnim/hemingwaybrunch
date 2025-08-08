const MenuItem = ({ category }) => {
  return (
    <>
      <div id={category.id} className="bg-primary-100">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-3 text-center">
            <p className="text-3xl font-bold md:text-4xl lg:text-5xl text-secondary-100">
              {category.name}
            </p>

            {category.desc && <p className="text-white font-karla md:text-xl">{category.desc}</p>}
          </div>
        </div>
      </div>

      {category.products.map((product, index) => {
        return (
          <div key={index} className="mb-8 md:col-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl font-bold text-secondary-100 md:text-2xl">{product.name}</p>
              <p className="text-sm font-bold text-white font-karla">
                {product.price}
                {product.subprice && `/${product.subprice}`}
              </p>
            </div>
            <div className="w-full my-2 text-white border-b border-dashed"></div>

            {product.desc && (
              <p className="text-lg text-white md:text-xl font-karla">{product.desc}</p>
            )}
          </div>
        )
      })}
    </>
  )
}

export default MenuItem
