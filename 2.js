/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * Свойство `salary` можно читать, но нельзя менять.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 * Если rate не установлен — возвращаем число 0.
 */

const person = {};

Object.defineProperties(person, {
    rate: {
        value: 0,
        writable: true,
    },
    salary: {
        get() {
            const currDay = new Date().getDate();
            return this.rate * currDay;
        },
    },
});

// Решение

person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
//console.log(person.salary);
person.salary;

exports.person = person;
