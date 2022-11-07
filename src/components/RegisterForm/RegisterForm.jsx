import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { FormRegister, LabelRegister, InputRegister, ButtonRegister } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LabelRegister>
        Username
        <InputRegister type="text" name="name" />
      </LabelRegister>
      <LabelRegister>
        Email
        <InputRegister type="email" name="email" />
      </LabelRegister>
      <LabelRegister>
        Password
        <InputRegister type="password" name="password" />
      </LabelRegister>
      <ButtonRegister type="submit">Register</ButtonRegister>
    </FormRegister>
  );
};
