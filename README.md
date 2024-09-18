![workflow](https://github.com/do-/node-ru-codes/actions/workflows/main.yml/badge.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)

[ru-codes](https://github.com/do-/node-ru-codes/wiki) - один из модулей node.js для проверки корректности ввода ИНН, КПП, ОГРН[ИП] и СНИЛС, а также для генерации таких кодов в автоматических тестах.

# Установка

```
npm install ru-codes
```
# API

| Код | Функция проверки | Генератор | Реализация |
| - | - | - | - |
| [ИНН](https://ru.wikipedia.org/wiki/%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0) физического лица | `isINN12 (str)` | `randomINN12 ()` | [ScalarProduct](https://github.com/do-/node-ru-codes/wiki/ScalarProduct)
| [ИНН](https://ru.wikipedia.org/wiki/%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0) юридического лица | `isINN10 (str)` | `randomINN10 ()` | [ScalarProduct](https://github.com/do-/node-ru-codes/wiki/ScalarProduct)
| [КПП](https://ru.wikipedia.org/wiki/%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0#%D0%9A%D0%BE%D0%B4_%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8_%D0%BD%D0%B0_%D1%83%D1%87%D1%91%D1%82_(%D0%9A%D0%9F%D0%9F)) | `isKPP (str)` | `randomKPP ()` | [Check](https://github.com/do-/node-ru-codes/wiki/Check)
| [ОГРН](https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80) | `isOGRN13 (str)` | `randomOGRN13 ()` | [Horner](https://github.com/do-/node-ru-codes/wiki/Horner)
| [ОГРНИП](https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D0%BD%D0%B8%D0%BC%D0%B0%D1%82%D0%B5%D0%BB%D1%8F) | `isOGRN15 (str)` | `randomOGRN15 ()` | [Horner](https://github.com/do-/node-ru-codes/wiki/Horner)
| [СНИЛС](https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BB%D0%B8%D1%86%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE_%D1%81%D1%87%D1%91%D1%82%D0%B0) | `isSNILS (str)` | `randomSNILS ({format?})` | [SNILS](https://github.com/do-/node-ru-codes/wiki/SNILS)

# Использование

```js
const {isSNILS, randomINN12, /*...*/} = require ('ru-codes')

const testINN12 = randomINN12 ()

try {
  isSNILS (s)
}
catch (err) {
  switch (err.code) {
    case 'type':
      // err.type -- это typeof аргумента, оказавшийся не string
    case 'length':
      // err.tobe -- требуемая длина строки
      // err.asis -- реальная длина строки
    case 'char':
      // err.value -- символ не попавший в интервал '0'..'9'
      // err.pos -- позиция этого символа (от 0)
    case 'format':
      // err.pos -- позиция проблемного символа (для формата СНИЛС)
    case 'checksum': 
      // err.tobe -- контрольная сумма, вычисленная по основной части строки
      // err.asis -- значение контрольной суммы, прочитанное непосредственно из строки
    default:
      throw err
  }
}
```
