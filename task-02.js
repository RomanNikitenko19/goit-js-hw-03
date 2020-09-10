// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.
// Функция возвращает число - количество свойств.

const countProps = function (obj) {
  const arrey = Object.keys(obj);

  const arrey2 = Object.values(obj);

  const arrey3 = Object.entries(obj);

  return arrey.length, arrey2.length, arrey3.length;
};

console.log(countProps({})); //0

console.log(countProps({
  name: 'Mango',
  age: 2
}));                         //2

console.log(countProps({
  mail: 'poly@mail.com',
  isOnline: true,
  score: 500
}));                         //3