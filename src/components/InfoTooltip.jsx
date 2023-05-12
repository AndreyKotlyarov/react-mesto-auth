import RegOk from "../images/Reg-ok.svg";
import RegFail from "../images/Reg-fail.svg";

export default function InfoTooltip() {
  return (
    <section className="pop-up">
      <div className="pop-up__container pop-up__container_type_info">
        <button type="button" className="pop-up__close-button"></button>

        <img className="pop-up__icon" src={RegFail} alt="" />

        <h2 className="pop-up__heading pop-up__heading_type_info">Вы успешно зарегистрировались!</h2>
      </div>
    </section>
  );
}
