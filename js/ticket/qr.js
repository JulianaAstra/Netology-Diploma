const getQrCode = (filmName, hallName, seats, date, seanceTime) => {
    const qrcode1 = QRCreator(`Фильм: ${filmName} Зал: ${hallName.slice(-1)} Ряд/Место ${seats} Дата: ${date} Начало сеанса: ${seanceTime} Билет действителен строго на свой сеанс`,
{modsize: 2});

const content = (qrcode) => {
  return qrcode.error ?
    `недопустимые исходные данные ${qrcode.error}`:
     qrcode.result;
};

document.querySelector('.ticket__info-qr').append(content(qrcode1));
}

export { getQrCode };
