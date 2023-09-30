import { useTheme } from "@emotion/react";
import { FormControlLabel, useMediaQuery } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

import { YellowButton } from "../../style/Global.styled";
import {
  AbsatzS,
  CollapseContainer,
  InfoSectionContainer,
  ItemS,
  ListText,
  WrapperS,
} from "./InfoSectionStyle";

const InfoSection = ({ text }) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const MOBILE = useMediaQuery(theme.breakpoints.down("sm"));
  const TABLET = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const DESKTOP = useMediaQuery(theme.breakpoints.up("lg"));

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const blockHeight = () => {
    if (MOBILE) {
      return "8.54em";
    }
    if (TABLET) {
      return "200px";
    }
    if (DESKTOP) {
      return "750px";
    }
  };

  return (
    <section>
      <InfoSectionContainer component="article">
        <CollapseContainer
          in={checked}
          orientation="vertical"
          timeout={800}
          collapsedSize={blockHeight()}
        >
          <ListText>
            <AbsatzS variant="caption" component="p">
              <strong>ОСЦПВ</strong> - твоя відповідальність перед суспільством!
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              <strong>ОСЦПВ</strong> - обов<span>&#39;</span>язковий вид
              страхування для автовласників за Законом, а ще це захист інтересів
              усіх учасників дорожнього руху.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Автоцивілка захищає власників автомобілів від можливих фінансових
              втрат у разі, якщо їх транспортний засіб заподіє шкоду життю,
              здоров
              <span>&#39;</span>ю або майну третіх осіб.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Ми всі розуміємо, як легко можуть трапитися неочікувані ситуації
              на дорозі - життя непередбачуване. Проте, наявність
              <strong>ОСЦПВ</strong> забезпечить ваш фінансовий захист.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              А що, якщо водій, який спричинив ДТП, не має дійсного поліса
              <strong> ОСЦПВ</strong>? Тоді він змушений буде особисто
              відшкодувати всі збитки потерпілим. І ці суми можуть сягати
              значних розмірів.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Якщо винуватець ДТП має дійсний поліс <strong>ОСЦПВ</strong>,
              збитки потерпілим відшкодує його страхова компанія.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Керування автівкою без дійсного договору <strong>ОСЦПВ</strong> -
              це порушення за Законом, яке не залишиться без наслідків. Власники
              авто можуть отримати також штраф за його відсутність.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Нагадуємо, оформивши вчасно договір <strong>ОСЦПВ</strong>, ви
              убезпечуєте себе від фінансових складнощів у випадку аварійних
              ситуацій. Захистіть себе та всіх учасників дорожнього руху, будьте
              свідомими та відповідальними!
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              <strong>
                Чи така ж юридична сила у електронного поліса як і у паперового?
              </strong>
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Так.
            </AbsatzS>
            <ItemS component="ol">
              <li>
                <AbsatzS variant="caption" component="p">
                  Електронний поліс страхування має таку ж юридичну силу, як і
                  паперовий. Електронне страхування та електронний підпис
                  врегульовано на законодавчому рівні законами України
                  <i> «Про електронну комерцію»</i> та
                  <i> «Про електронні довірчі послуги»</i> та ін.
                </AbsatzS>
              </li>
              <li>
                <AbsatzS variant="caption" component="p">
                  Нацкомфінпослуг затвердив впровадження е-полісу
                  <strong> ОСЦПВ</strong> своїм Розпорядженням №3631 від
                  31.08.2017, можливість укладати електронний договір
                  обов’язкового страхування автоцивільної відповідальності
                  з’явилась в українських водіїв з 7 лютого 2018 року.
                </AbsatzS>
              </li>
              <li>
                <AbsatzS variant="caption" component="p">
                  Кабінет міністрів України закріпив у правилах дорожнього руху
                  (ПДР) право <strong>підтверджувати</strong> наявність полісу
                  автоцивілки з екрану гаджета. А пункт 2.1 ПДР доповнили
                  наступним формулюванням:
                  <span> &#34;</span>при наявності е-поліса водій може
                  підтвердити його на <strong>електронному</strong> або
                  паперовому носії
                  <span> &#34;</span>.
                </AbsatzS>
              </li>
            </ItemS>
            <AbsatzS variant="caption" component="p">
              <strong>
                Чому в ДІЯ страховий поліс не дійсний? Як швидко дані про
                укладений договір потрапляють в ДІЯ?
              </strong>
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Надаємо роз
              <span>&#39;</span> яснення та посилання.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              ДІЯ відображає інформацію виключно про договір страхування,
              укладений щодо транспортного засобу, власником або зареєстрованим
              користувачем якого є особисто клієнт. При цьому пошук здійснюється
              за одночасним співпадінням двох параметрів: державного
              реєстраційного номеру та VIN-коду транспортного засобу (ТЗ).
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              У випадку, якщо договір страхування укладено сьогодні, то він може
              потрапити до ресурсу, до якого звертається ДІЯ, не раніше, ніж
              завтра вранці. Синхронізація баз даних здійснюється протягом ночі.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Якщо допущена помилка в даних щодо державного номерного знаку або
              VIN-коду ТЗ, то договір не відобразиться в ДІЇ.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Також якщо власник транспортного засобу і страхувальник різні
              особи.
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
            <AbsatzS variant="caption" component="p">
              На дорозі ніхто не застрахований від непередбачуваних ситуацій,
              тому так важливо мати страховий поліс ОСЦПВ. Поліс забезпечує
              відшкодування шкоди, заподіяної життю, здоров<span>&#39;</span>ю
              та майну потерпілих внаслідок ДТП. Іноді варто зупинитися і
              розглянути, як правильно оформити поліс ОСЦПВ при зміні
              автовласника.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Існує кілька варіантів оформлення страхового поліса, щоб
              забезпечити неперервний захист:
            </AbsatzS>
            <ItemS component="ol">
              <li>
                <AbsatzS variant="caption" component="p">
                  Якщо ви купуєте вживаний автомобіль, власник може передати вам
                  свій поліс <strong> ОСЦПВ </strong>
                  безоплатно або за винагороду. Це означає, що страховий поліс
                  продовжує діяти на автомобіль незалежно від зміни власника.
                  Таким чином, ви будете захищені з моменту покупки до
                  закінчення терміну дії поліса.
                </AbsatzS>
              </li>
              <li>
                <AbsatzS variant="caption" component="p">
                  Колишній власник переносить кошти на оформлення нової
                  автоцивілки для іншого автомобіля.
                </AbsatzS>
              </li>
            </ItemS>
            <AbsatzS variant="caption" component="p">
              Цей варіант використовується, коли водій придбав новий автомобіль.
              Колишній власник транспортного засобу повинен звернутися до своєї
              страхової компанії, щоб розірвати чинний договір та перенести
              залишок коштів на оформлення нового поліса на інше авто.
              Розірвання чинного договору відбувається одночасно з укладенням
              нового.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              <strong> ОСЦПВ </strong>є обов<span>&#39;</span>язковим за
              законом, тому важливо вчасно оформити поліс автоцивілки. В
              будь-якому випадку, ваш страховий поліс гарантує захист у разі
              дорожньо-транспортної пригоди, запобігаючи фінансовим труднощам.
            </AbsatzS>
            <AbsatzS variant="caption" component="p">
              Не забувайте, що автоцивілка - це не просто обов<span>&#39;</span>
              язковість, але й інвестиція в безпеку та ваш фінансовий захист. На
              нашому сервісі Ви можете швидко та зручно оформити поліс
              автоцивілки. В разі виникнення питань наші спеціалісти залюбки
              нададуть на них відповідь.
            </AbsatzS>
          </ListText>
        </CollapseContainer>
        <FormControlLabel
          sx={{ display: "block", textAlign: "center" }}
          control={
            <YellowButton onClick={handleChange}>
              {!checked ? "Читати далі" : "Назад"}
            </YellowButton>
          }
        />
      </InfoSectionContainer>
    </section>
  );
};

export default InfoSection;
#how can i add dots to the my AbsatzS component if the CollapseContainer is closed ?
