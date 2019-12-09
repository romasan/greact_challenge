# React + GraphQL

Для работы при сборке необходимо указать github access token

```
TOKEN=0123456789abcdef npm start
```

Логин можно изменить в конфиге: `/src/config/index.json`

---

Необходимо написать React-приложение, которое будет забирать данные о твоих репозиториях (или репозиториях из поиска) и отображать у себя. А также у каждого репозитория должна быть отдельная страничка с подробной инфой по нему (например, `/repo/{id}`).

У каждого репозитория должна отображаться информация о том когда был сделан последний апдейт:
- меньше минуты назад –– `только что`
- меньше часа назад –– `XX минут назад`
- меньше 24 часов назад –– `XX часов назад`
- больше 24 часов –– `DD.MM.YYYY HH:MM`
Этот текст должен обновляться без перезагрузки страницы.

## Технологии

- [react](https://github.com/facebook/react). фреймворк
- [ant-design](https://github.com/ant-design/ant-design). библиотека компонентов
- [react-apollo](https://github.com/apollographql/react-apollo). для связки приложения с api
- [react-router](https://github.com/ReactTraining/react-router). для роутинга
- [webpack](https://github.com/webpack/webpack). сборка
- для стилей у нас в проекте используются [styled-components](https://github.com/styled-components/styled-components), но ты можешь выбирать что хочешь
- для хранения глобального локального состояния можешь использовать [redux](https://github.com/reduxjs/redux) или [контекст реакта](https://ru.reactjs.org/docs/context.html), так же на твой выбор

## Полезные ссылки

- [Документация GitHub API](https://developer.github.com/v4/guides/)
- [Быстрый старт с React Apollo](https://www.apollographql.com/docs/react/get-started/)
