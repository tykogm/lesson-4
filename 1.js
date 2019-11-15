/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {
    get salary() {
        const date = new Date();
        const nextDate = new Date(date.getFullYear(), date.getMonth()+1, 0);

        return nextDate.getDate() - date.getDate() > 20 ? "good salary" : "bad salary";
    }
};

// Решение
console.log(person.salary);
//person.salary; // good salary

exports.person = person;
