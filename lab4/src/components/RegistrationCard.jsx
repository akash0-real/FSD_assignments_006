import RegistrationForm from "./RegistrationForm";

function RegistrationCard() {
  return (
    <section className="form-container" aria-labelledby="registration-title">
      <h1 id="registration-title">Registration Form</h1>
      <RegistrationForm />
    </section>
  );
}

export default RegistrationCard;
