export default function Login() {
  return (
    <section className="auth-page">
      <h1 className="auth-page__title">Вход</h1>
      <form className="auth-page__form">
        <input className="auth-page__input auth-page__input_type_email" placeholder="Email"></input>
        <input className="auth-page__input auth-page__input_type_password" placeholder="Пароль"></input>
        <button type="submit" className="auth-page__button">
          Войти
        </button>
      </form>
    </section>
  );
}
