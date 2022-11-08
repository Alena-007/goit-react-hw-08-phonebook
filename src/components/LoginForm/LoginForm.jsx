import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { logIn } from 'redux/auth/authOperations';
import { FormLogin, LabelLogin, InputLogin, ButtonLogin } from './LoginForm.styled';
import { Loader } from '../Loader';
import { Box } from 'components/Box';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <FormLogin onSubmit={handleSubmit} autoComplete="off">
        <p>Welcome back</p>
        <LabelLogin>
          Email
          <InputLogin type="email" name="email" required />
        </LabelLogin>
        <LabelLogin>
          Password
          <InputLogin type="password" name="password" required />
        </LabelLogin>
        <ButtonLogin type="submit">Log In</ButtonLogin>
      </FormLogin>
      <Box mt={3}>{isLoading && <Loader />}</Box>
    </>
  );
};
