// App.jsx
import React from 'react';
import Card from './Card'; // імпортуємо компонент Card

const data = [
  {
    img: 'https://images.pexels.com/photos/25225806/pexels-photo-25225806.jpeg',
    title: 'Cute Dog',
    description: 'A cute dog relaxing on a sunny day.',
  },
  {
    img: 'https://images.pexels.com/photos/30578249/pexels-photo-30578249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Happy Dog',
    description: 'A happy dog jumping around.',
  },
  // Додайте ще картки за потребою
];

const App = () => {
  return (
    <div className="app">
      <h3>Proj React Homework</h3>  {/* Перемістіть сюди */}
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default App;




