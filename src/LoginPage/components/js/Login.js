import '../scss/Login.scss'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import EmailIcon from '@mui/icons-material/Email';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { loginUser } from '../../../services/services';

function Login(props) {

  const [cookies, setCookie] = useCookies(['access_token'])

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const [isLoginValid, setIsLoginValid] = useState({
    email: true,
    password: true
  });

  const fieldsValid = () => {

    setIsLoginValid({
      email: values.email != '',
      password: values.password != ''
    })

    return isLoginValid
}


  const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {

    if(fieldsValid()){

      loginUser(values.email, values.password).then((response) => {

        if(response.status == 200){

          return response.json();
        }
        else{
          alert("Go Away!");
          return null
        }
      }).then(function(data) {
        if(data != null){
          console.log(data.access_token);
          setCookie("danistir_access_token", data.access_token, {path: "/"});
          window.location.href = '/';
        }
        
      });
    }
  };

  return(

    <div className="login">

      <div className="title">Giriş Yap</div>

      <FormControl className="text-field" sx={{ m: 1, width: '300px' }} error={!isLoginValid.email}>
          <InputLabel>E-Posta</InputLabel>
          <Input
            type={'text'}
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">
                <EmailIcon />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>

        <FormControl className="text-field" sx={{ m: 1, width: '300px' }} variant="outlined" error={!isLoginValid.password}>
          <InputLabel htmlFor="outlined-adornment-password">Şifre</InputLabel>
          <Input
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button onClick={handleSubmit} variant="contained" className="submit-button">Giriş yap</Button>
        <div onClick={ () => {props.handleBanner('right')}} className="register-text">Henüz üye olmadınız mı? Buradan üye olun!</div>
    </div>
  );
}

export default Login;