import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => {
              return (
                <PizzaBlock
                  key={obj.id}
                  // {...obj} Можно сделать вот так она перебирает все своиства в обьекте pizzas но имена своиства должны быть схожими как на обьекте
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  sizes={obj.sizes}
                  types={obj.types}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
