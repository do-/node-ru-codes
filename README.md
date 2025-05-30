![workflow](https://github.com/do-/node-ru-codes/actions/workflows/main.yml/badge.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)

[ru-codes](https://github.com/do-/node-ru-codes/wiki) - один из модулей node.js, где реализована проверка форматов и контрольных чисел ИНН, ОГРН[ИП], ОКПО, СНИЛС, номеров кадастровых записей, банковских счетов и карт, а также рандомизация таких данных для нужд тестирования.

# Установка
```sh
npm install ru-codes
```
# Использование
## Проверка значения с использованием `if` (быстрая)
```js
const {isntCadNum} = require ('ru-codes')

for (const record of records) {
  if (isntCadNum (record.cadastr_number)) continue
  // ... обработка record с корректным cadastr_number
}
```
## Проверка значения с использованием `try`
```js
const {isSNILS} = require ('ru-codes')

try {
  isSNILS (s)
}
catch (err) {
  switch (err.code) {
    // см. Формат результата проверки
  }
}
```
## Генерация случайного корректного кода
```js
const {randomBankCard} = require ('ru-codes')
const testCardNumber = randomBankCard ({
// pre: ['2200', '2201', '2202', '2203', '2204'], // МИР
// format: true,                                  // с пробелами
}) 
```

# API

| Код | Проверка `if` | Проверка `try` | Генератор | Реализация |
| - | - | - | - | - |
| [№ р/с](https://ru.wikipedia.org/w/index.php?title=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE&oldid=139614063#%D0%9D%D0%BE%D0%BC%D0%B5%D1%80%D0%B0_%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D1%85_%D1%81%D1%87%D0%B5%D1%82%D0%BE%D0%B2) [*](https://github.com/do-/node-ru-codes/wiki#%D0%BE-%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D1%85-%D0%BA%D0%BE%D0%B4%D0%B0%D1%85)| `isntBankAcct (str, bic)` | `isBankAcct (str, bic)` | `randomBankAcct (bic, opt)` | [BankAcct](https://github.com/do-/node-ru-codes/wiki/BankAcct)
| [№ карты](https://ru.wikipedia.org/w/index.php?title=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE&oldid=139614063#%D0%9D%D0%BE%D0%BC%D0%B5%D1%80%D0%B0_%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D1%85_%D0%BA%D0%B0%D1%80%D1%82)| `isntBankCard (str)` | `isBankCard (str)` | `randomBankCard (opt)` | [BankCard](https://github.com/do-/node-ru-codes/wiki/BankCard)
| [ИНН](https://ru.wikipedia.org/wiki/%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0) ФЛ | `isntINN12 (str)` | `isINN12 (str)` | `randomINN12 (opt)` | [ScalarProduct](https://github.com/do-/node-ru-codes/wiki/ScalarProduct)
| [ИНН](https://ru.wikipedia.org/wiki/%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0) ЮЛ | `isntINN10 (str)` | `isINN10 (str)` | `randomINN10 (opt)` | [ScalarProduct](https://github.com/do-/node-ru-codes/wiki/ScalarProduct)
| [Кадастровый №](https://ru.wikipedia.org/w/index.php?title=%D0%9A%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80&oldid=124734476#%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F) | `isntCadNum (str)` | `isCadNum (str)` | `randomCadNum (opt)` | [CadNum](https://github.com/do-/node-ru-codes/wiki/CadNum)
| [КПП](https://ru.wikipedia.org/wiki/%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%B0#%D0%9A%D0%BE%D0%B4_%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8_%D0%BD%D0%B0_%D1%83%D1%87%D1%91%D1%82_(%D0%9A%D0%9F%D0%9F)) | `isntKPP (str)` | `isKPP (str)` | `randomKPP (opt)` | [Check](https://github.com/do-/node-ru-codes/wiki/Check)
| [ОГРН](https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80) | `isntOGRN13 (str)` | `isOGRN13 (str)` | `randomOGRN13 (opt)` | [Horner](https://github.com/do-/node-ru-codes/wiki/Horner)
| [ОГРНИП](https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D0%BD%D0%B8%D0%BC%D0%B0%D1%82%D0%B5%D0%BB%D1%8F) | `isntOGRN15 (str)` | `isOGRN15 (str)` | `randomOGRN15 (opt)` | [Horner](https://github.com/do-/node-ru-codes/wiki/Horner)
[ОКПО](https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%89%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80_%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9_%D0%B8_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B9) ЮЛ  | `isntOKPO8 (str)` | `isOKPO8 (str)` | `randomOKPO8 (opt)` | [OKPO](https://github.com/do-/node-ru-codes/wiki/OKPO)
[ОКПО](https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%89%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80_%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9_%D0%B8_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B9) ИП | `isntOKPO10 (str)` | `isOKPO10 (str)` | `randomOKPO10 (opt)` | [OKPO](https://github.com/do-/node-ru-codes/wiki/OKPO)
| [СНИЛС](https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BD%D0%BE%D0%BC%D0%B5%D1%80_%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BB%D0%B8%D1%86%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE_%D1%81%D1%87%D1%91%D1%82%D0%B0) | `isntSNILS (str)` | `isSNILS (str)` | `randomSNILS (opt)` | [SNILS](https://github.com/do-/node-ru-codes/wiki/SNILS)

## Функции-валидаторы
На каждый код `XXX` API содержит пару функций проверки `isXXX` и `isntXXX`. 

Для успешно проверенных значений все они возвращают `undefined`. Отличие заключается в том, как представляются ошибки валидации:
* `isntXXX` [возвращают](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) массив вида `[message, {code, asis, tobe, pos}]` — то есть [правдоподобное](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) значение в отличие от [неправдоподобного](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) `undefined`, что позволяет подставлять результат прямо в `if`, `while` и т. п., если детали ошибки не представляют интереса;
* `isXXX` же, подобно функциям модуля [`assert`](https://nodejs.org/docs/latest/api/assert.html), [выбрасывают](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) [ошибки](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) с соответствующими `message` и дополнительными полями `code`, `asis`, `tobe` и `pos` — соответственно, предназначены для применения в блоках [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

Использование специальных синтаксических конструкций для обработки ошибок помогает лучше структурировать код, однако за это приходится [жертвовать](https://www.measurethat.net/Benchmarks/Show/32500/1/return-err-vs-throw-err#latest_results_block) производительностью, поэтому для достижения максимальной скорости при массовой обработке данных следует использовать `isntXXX`.

### Формат результата проверки

| Поле | Описание | Примечание
| - |- |- |
| `code` | тип ошибки |
| `tobe` | требуемое значение | Если известно точно
| `asis` | обнаруженное значение | Если отличается от `tobe`
| `pos` | позиция проблемного символа |

| `code` | Описание | +поля | Примечание
| - |- |- |- |
| `char` | нецифровой символ | `pos` | 
| `checksum` | контрольная сумма | `asis`, `tobe` | зависит от алгоритма
| `format` | символ форматирования | `pos` | `'-'` для СНИЛС, `' '` для № банковских карт
| `length` | длина `str` | `asis`, `tobe` | `tobe == totalLength`
| `type` | тип `str` | `asis`, `tobe` | `tobe == 'string'`

## Функции-генераторы
На каждый код `XXX` API содержит функцию `randomXXX`, генерирующую случайные значения необходимого формата. Необязательный аргумент `opt` — во всех случаях объект с набором опций:
| Имя | Тип | По умолчанию | Описание
| - | - | - | - |
| `pre` | `[String]` | `['']` | Массив строк, одна из которых будет выбрана в качестве префикса генерируемого значения
| `format` | `Boolean` | `false` | Форматировать ли сгенерированное значение (реализовано только для СНИЛС и № банковских карт)

# Примечания
## О банковских кодах
Контрольная сумма номера расчётного счёта определяется не сама по себе, а зависит от [БИК](https://ru.wikipedia.org/wiki/Банковский_идентификационный_код) соответствующего (вообще говоря, филиала) банка — так что связанные с этим функции имеют дополнительный аргумент `bic`.

Разрабатывать валидаторы и генераторы для самих БИК (как и корреспондентских счетов) на основе контрольных чисел не имеет смысла, поскольку полный справочник этих значений содержит лишь порядка 1000 записей, а [его актуальная версия](https://cbr.ru/PSystem/payment_system/) всегда находится в открытом доступе и легко может быть прочитана, например, модулем [`ru-cbr-newbik`](https://www.npmjs.com/package/ru-cbr-newbik).

## Об ОКПО
Для кодов [ОКПО](https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%89%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80_%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9_%D0%B8_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B9), помимо 8-значных (ЮЛ) и 10-значных (ИП), встречаются также упоминания о 14-значных: обособленных подразделений. Однако  реального примера такого кода в открытых данных обнаружить не удалось, как и внятной нормативной документации. В текущей версии функции _*OKPO14_ не реализованы.

Если верить некоторым описаниям, предметом валидации там является только отрезок из первых 8 символов: ОКПО юридического лица в целом — так что при необходимости вполне можно обойтись OKPO8.

## О типах данных
Все коды и их префиксы в этой библиотеке представляются исключительно [примитивными](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) [строками](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). Попытка проверить, например, ИНН, заданный в виде значения типа [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) или [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) — приведёт к ошибке вне зависимости от того, какими цифрами оно представляется в десятичной записи.
