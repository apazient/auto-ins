import { AbsatzS } from "./InfoSectionStyle";

const MiddleSecondText = () => {
  return (
    <>
      <AbsatzS variant="caption" component="p" role="text">
        <strong>
          Чому в ДІЯ страховий поліс не дійсний? Як швидко дані про укладений
          договір потрапляють в ДІЯ?
        </strong>
      </AbsatzS>
      <AbsatzS variant="caption" component="p" role="text">
        Надаємо роз
        <span>&#39;</span> яснення та посилання.
      </AbsatzS>
      <AbsatzS variant="caption" component="p" role="text">
        ДІЯ відображає інформацію виключно про договір страхування, укладений
        щодо транспортного засобу, власником або зареєстрованим користувачем
        якого є особисто клієнт. При цьому пошук здійснюється за одночасним
        співпадінням двох параметрів: державного реєстраційного номеру та
        VIN-коду транспортного засобу (ТЗ).
      </AbsatzS>
      <AbsatzS variant="caption" component="p" role="text">
        У випадку, якщо договір страхування укладено сьогодні, то він може
        потрапити до ресурсу, до якого звертається ДІЯ, не раніше, ніж завтра
        вранці. Синхронізація баз даних здійснюється протягом ночі.
      </AbsatzS>
      <AbsatzS variant="caption" component="p" role="text">
        Якщо допущена помилка в даних щодо державного номерного знаку або
        VIN-коду ТЗ, то договір не відобразиться в ДІЇ.
      </AbsatzS>
      <AbsatzS variant="caption" component="p" role="text">
        Також якщо власник транспортного засобу і страхувальник різні особи.
      </AbsatzS>
      <AbsatzS variant="caption" component="p">
        <a
          href="http://www.mtsbu.ua/ua/presscenter/news/158143/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Посилання на джерело
        </a>
      </AbsatzS>
      <AbsatzS variant="caption" component="p">
        <a
          href="https://policy-web.mtsbu.ua/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Перевірити коректність даних по ТЗ в базі МТСБУ
        </a>
      </AbsatzS>
    </>
  );
};

export default MiddleSecondText;
