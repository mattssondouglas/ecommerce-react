import logo from './logo.svg';

const App = () => {

  const categories = [
    {
      title: 'Hats',
    },
    {
      title: 'Jackets',
    },
    {
      title: 'Sneakers',
    },
    {
      title: 'Womens',
    },
    {
      title: 'Mens',
    },
  ]

  return (
    <div className='categories-container'>
      {categories.map(({title}) => (
        <div className='category-container'>
        <div className="background-image"/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default App;
