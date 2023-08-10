# JungleConsulting

Цей веб-додаток було створено у рамках виконання тестового завдання компанії Jungle Consulting. Він дозволяє отримати базову інформацію про юзерів платформи GitHub та їх публічні репозиторії. Додаток виконано за допомогою фреймворку Angular, для стилізації використано бібліотеку Bootstrap.

## Структура додатку

### Головна сторінка

На головній сторінці додатку наведено список юзерів платформи GitHub. Інформацію про кожного юзера представлено у вигляді картки, що містить фото та нікнейм юзера.

Над списком юзерів розташовано поле пошуку, що дозволяє знайти користувачів платформи за допомогою нікнейма.

![Homepage](./src/assets/images/readme/01_homepage.png)

У випадку, якщо юзера не зареєстровано на платформі, на полем пошуку з'явиться відповідне попередження жовтого кольору. Також при виникненні помилок зв'язку з сервером, над полем пошуку з'явиться сповіщення червоного кольору з інформацією про помилку.

![APIError](./src/assets/images/readme/02_homepage.png)

### Репозиторії

При кліку на картку юзера користувача буде перенаправдено на сторінку, що містить список публічних репозиторіїв обраного юзера.

![Repos](./src/assets/images/readme/03_Repos.png)

Кожен репозиторій представлено карткою, що містить назву репозиторію, його опис, та кнопку Details, що відкриває модальне вікно з детальною інформацією про репозиторій.

![Modal](./src/assets/images/readme/04_Modal.png)

### Сторінка 404

У випадку введення у адресну строку хибного шляху, користувача буде перенаправдено на сторінку 404, де розміщено кнопку для зручного переходу на домашню сторінку додатку.

![404](./src/assets/images/readme/05_404-page.png)

## Запуск у режимі розробки і білд продакшн-версії проєкту

Для запуску проєкту у режимі розробки склонуйте даний репозиторій на свій PC, встановіть Noge.js та Angular CLI ([детальніше](https://angular.io/guide/setup-local)), та запустіть у терміналі команду `ng serve`. Запущений проєкт можна буде переглянути за адресою `http://localhost:4200/`. Додаток автоматично перезавантажиться при зміні будь-якого із вихідних файлів.

Для створення продакшн версії проєкту запустіть у терміналі команду `ng build`. Готовий проєкт буде зібрано у папці `dist/jungle-consulting`.

## Деплой проєкту

[Ознайомчу версію проєкту](https://graceful-klepon-d2c83a.netlify.app) викладено на сервері Netlify. Доступ до неї можна отримати за посиланням:

```javascript
"https://graceful-klepon-d2c83a.netlify.app";
```

## Використані технології

Під час роботи над проєктом було використано наступний стек тенологій:

<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" alt="Angular" title="Angular" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png" alt="HTTP" title="HTTP" /></code>
<code><img height="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" /></code>
