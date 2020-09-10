// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и
// возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {
  const array = Object.entries(employees);
  let bestName = array[0][0];
  let bestScore = array[0][1];
  // console.log(bestName, bestScore);

  for (i = 0; i < array.length; i += 1) {
    // console.log(array[i]);
    const innerArray = array[i];
    // console.log(innerArray);
    let name = innerArray[0];
    let score = innerArray[1];
    if (bestScore < score) {
      bestScore = score;
      bestName = name;
    }
  }
  return bestName
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux