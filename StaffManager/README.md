### Задание:

Создать CRUD (Create, Read, Update, Delete) приложение по работе с данными персонала. Функционал модулей:

1) Модуль $\textsf{\color{#a4d8fc}app-info}$ должен отображать: 
- общее число сотрудников;
- число сотрудников, которые получат премию.

2) Модуль $\textsf{\color{#a4d8fc}search-panel}$ должен иметь:
- поле ввода для поиска сотрудников по имени;
- фильтр по критериям: *"Все сотрудники"*, *"На повышение"* и *"З/П больше 1000$*"

3) Модуль $\textsf{\color{#a4d8fc}employees-list-item}$ представляет собой элемент списка сотрудников, содержащий следующие поля:
- имя и инициалы;
- з/п;
- кнопка получения премии в виде иконки `"fas fa-cookie"` из библиотеки **font-awesome**, цвет $\texttt{\color{E09F3E}{\#e09f3e}}$;
- кнопка удаления данного сотрудника в виде иконки `"fas fa-trash"` из библиотеки **font-awesome**, цвет $\texttt{\color{E5383B}{\#e5383b}}$;
- иконка звездочки `"fas fa-cookie"` из библиотеки **font-awesome**, которая отображается только, если сотрудник идет на повышение. **Сотрудника идет на повышение, если на его имя нажали ЛКМ**.
4) Модуль $\textsf{\color{#a4d8fc}employees-list}$ список элементов $\textsf{\color{#a4d8fc}employees-list-item}$;
5) Модуль $\textsf{\color{#a4d8fc}employees-add-form}$ должен иметь:
- заголовок **"Добавьте нового сотрудника"**;
- поле для ввода имени;
- поле для ввода з/п;
- кнопку **"Добавить"**.

```javascript
// install npm packages
npm i --save-dev sass
```
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.2/css/bootstrap.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
```