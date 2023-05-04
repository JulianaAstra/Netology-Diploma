// const qrcode1 = QRCreator('Фильм: Аватар: Путь воды (2022) Зал: Зал1 Ряд/Место 1/1 Дата: 04-04-2023 Начало сеанса: 17:20 Билет действителен строго на свой сеанс')

const qrcode1 = QRCreator(`Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos rerum dolores maxime neque voluptas officia aliquam dolorem quidem, debitis doloribus quae numquam nobis aliquid corporis. Voluptatibus molestiae eaque voluptate nemo!`)

const content = (qrcode) => {
  return qrcode.error ?
    `недопустимые исходные данные ${qrcode.error}`:
     qrcode.result;
};

document.querySelector('.ticket__info-qr').append(content(qrcode1));

