const movies = [
    {
      id: 1,
      title: "Інтерстеллар",
      genre: "Наукова фантастика",
      description: "Мандрівка через простір і час для порятунку людства.",
      dateTime: "2025-04-15 19:00",
      poster: "https://upload.wikimedia.org/wikipedia/uk/2/29/Interstellar_film_poster2.jpg"
    },
    {
      id: 2,
      title: "Джокер",
      genre: "Драма",
      description: "Історія походження найбільшого лиходія Готема.",
      dateTime: "2025-04-15 21:00",
      poster: "https://multiplex.ua/images/8c/11/8c112bff9fb3c408b956d674c6e27d84.jpeg"
    },
    {
      id: 3,
      title: "Кунг-Фу Панда 4",
      genre: "Анімація",
      description: "По повертається, щоб знову рятувати долину.",
      dateTime: "2025-04-16 17:00",
      poster: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/kung-fu-panda-4/images/regions/us/onesheet.jpg"
    },
    {
      id: 4,
      title: "Темний лицар",
      genre: "Бойовик",
      description: "Бетмен проти Джокера у боротьбі за Ґотем.",
      dateTime: "2025-04-16 20:00",
      poster: "https://images.prom.ua/4224605253_w640_h320_tyomnyj-rytsar-the.jpg"
    },
    {
      id: 5,
      title: "Барбі",
      genre: "Комедія",
      description: "Рожевий світ та екзистенційна криза Барбі.",
      dateTime: "2025-04-17 18:00",
      poster: "https://uaserial.tv/images/serials/64/64ad468011806973336367.webp"
    },
    {
      id: 6,
      title: "Опенгеймер",
      genre: "Історичний",
      description: "Життя творця атомної бомби.",
      dateTime: "2025-04-17 21:00",
      poster: "https://uaserials.pro/posters/8215.webp"
    },
    {
        id: 7,
        title: "Аутсайдери / Форд проти Феррарі",
        genre: "Драма, Спорт",
        description: "Епічна драма, що розповідає про боротьбу між автомобільними брендами Ford і Ferrari на знаменитих перегонах 24 години Ле-Ману в 1960-х роках.",
        dateTime: "2019-11-15 20:00",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnqnY8kt0AX4a6qKyqTzPW5GYrBVUle2hTA&s"
      },      
      {
        id: 8,
        title: "Погані хлопці: Все або нічого",
        description: "Продовження культової франшизи про двох детективів, які знову опиняються у вирі вибухових подій.",
        genre: "Бойовик, Комедія",
        dateTime: "2024-06-14 18:00",
        poster: "https://uaserials.pro/posters/8891.webp"
      },
      {
        id: 9,
        title: "Месники: Фінал",
        description: "Месники зібралися, щоб протистояти Таносу та врятувати всесвіт від знищення, у фінальному етапі епічної боротьби за долю світу.",
        genre: "Бойовик, Фантастика",
        dateTime: "2019-04-26 22:00",
        poster: "https://api.vkino.com.ua/posters/eb/eb043955be009d49a15a82280e0014a4c21fdb89.jpg"
      },
      {
        id: 10,
        title: "Початок",
        description: "Група професіоналів, які можуть проникати в мрії, здійснює найскладнішу місію в своєму житті.",
        genre: "Наукова фантастика",
        dateTime: "2010-07-16 19:30",
        poster: "https://s4.vcdn.biz/static/f/1396166071/image.jpg/pt/r375x0x4"
      },
      {
        id: 11,
        title: "Зоряні війни: Пробудження сили",
        description: "Нове покоління героїв, яке повинно об'єднатися для боротьби з імперією.",
        genre: "Фантастика",
        dateTime: "2015-12-18 20:30",
        poster: "https://staticeu.sweet.tv/images/cache6/posters/BCIXWEQCOVVSUAQIAI======/15761-zoryani-viyni-epizod-7-probudzhennya-sili.jpg"
      },
      {
        id: 12,
        title: "Доктор Стрендж",
        description: "Колишній хірург, який втратив свої здібності, шукає спосіб зцілення і потрапляє у світ магії.",
        genre: "Фантастика, Бойовик",
        dateTime: "2016-11-04 18:30",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/bb966b79-5b10-485d-88d7-fb6aeb79b185/220x330"
      },
      {
        id: 13,
        title: "Ла-Ла Ленд",
        description: "Романтична драма про молоду пару, яка намагається знайти баланс між кар'єрою і стосунками.",
        genre: "Романтика, Драма",
        dateTime: "2016-12-09 17:30",
        poster: "https://uaserial.com/images/serials/65/655638bc6d13b244305014.webp"
      },
      {
        id: 14,
        title: "Ґран Туризмо",
        description: "Мотиваційна історія гравця в Gran Turismo, який став справжнім гонщиком, подолавши всі труднощі.",
        genre: "Спорт, Драма",
        dateTime: "2023-08-09 22:30",
        poster: "https://uaserials.pro/posters/8072.webp"
      },
      {
        id: 15,
        title: "Той, що жахає 3",
        description: "Клоун-ман`як повертається в ще більш моторошному продовженні. Вижити — не означає виграти.",
        genre: "Жахи",
        dateTime: "2024-10-31 21:00",
        poster: "https://uaserial.com/images/serials/67/671df8827e264277402567.webp"
      },
      {
        id: 16,
        title: "Ігри розуму",
        description: "Справжня історія математика Джона Неша, який бореться з психічними проблемами, але досягає великих наукових досягнень.",
        genre: "Драма",
        dateTime: "2001-12-21 20:00",
        poster: "https://uaserials.pro/posters/2060.webp"
      },
      {
        id: 17,
        title: "Веном: Останній танець",
        description: "Едді Брок і Веном стикаються з найбільшою загрозою у фінальній битві, яка може змінити їхнє життя назавжди.",
        genre: "Фантастика, Бойовик",
        dateTime: "2024-10-25 19:30",
        poster: "https://uakino.me/uploads/posts/2024-10/5d34c9238f_44.jpg"
      },
    {
        id: 18,
        title: "Вартові Галактики 3",
        description: "Група незвичайних героїв знову об'єднується, щоб захистити всесвіт від нових загроз.",
        genre: "Фантастика",
        dateTime: "2023-05-05 20:00",
        poster: "https://kino-teatr.ua/public/main/reviews/2023-05/review_5438.jpg"
      },
      {
        id: 19,
        title: "Трансформери: Повстання звірів",
        description: "Боротьба між автоботами і десептиконами продовжується, тепер з новими союзниками.",
        genre: "Бойовик",
        dateTime: "2023-06-09 21:00",
        poster: "https://upst.fwdcdn.com/?MXdwMHFyODpodHRwOi8vYmlsc2hlLmNvbS91cGxvYWRzL2ltYWdlcy9iaWxzaGUvNTAzMV8yLmpwZw%3D%3D"
      },
      {
        id: 20,
        title: "Дюна",
        description: "Епічна історія про боротьбу за виживання на пустельній планеті Арракіс.",
        genre: "Пригоди",
        dateTime: "2021-10-22 19:00",
        poster: "https://uaserial.com/images/serials/66/662c218bd4504886698257.webp"
      },      
  ];
  
  export default movies;
  