import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center p-4">
      <div className="grid grid-cols-1 custom:grid-cols-2 md:grid-cols-3 gap-4">
        <ProductCard
          title="Первый товар"
          origin="Россия"
          currency="RUB"
          imageUrl="https://picsum.photos/300/200?random=1"
        />
        <ProductCard
          title="Второй товар"
          origin="Франция"
          price={59900}
          currency="EUR"
          imageUrl="https://picsum.photos/300/200?random=2"
        />
        <ProductCard
          title="Третий товар"
          origin="США"
          price={39900}
          currency="USD"
          imageUrl="https://picsum.photos/300/200?random=3"
        />
        <ProductCard
          title="Четвертый товар"
          origin="Германия"
          price={29900}
          currency="EUR"
          imageUrl="https://picsum.photos/300/200?random=4"
        />
      </div>
    </div>
  );
}

export default App;
