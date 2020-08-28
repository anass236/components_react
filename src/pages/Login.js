import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {withStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import AuthService from '../services/auth-service'

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#513da8',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#513da8',
        }
    },
})(TextField);


function Login() {
    const { register, handleSubmit, errors } = useForm();
    const [message, setMessage] = useState();
    const history = useHistory();
    const onSubmit = (data, e) => {
        setMessage({
            data:"Login is in progress..."
        })
        AuthService.login(data.username, data.password)
            .then(({ error, data }) => {
                setMessage({
                    data: error || "Logged in successfully, redirecting..."
                });
                !error &&
                setTimeout(() => {
                    history.push("/dashboard");
                }, 3000);

                !error && e.target.reset();
            })

    }


    return (
        <div className='root-color'>
            <div className="login-container">
                <div className="login-box">
                    <input type="checkbox" id="toggle" className="login-box__toggle" hidden/>
                    <img src={require('../vendors/img/login-image.png')} alt="" className="login-box__image"/>
                    <form className="form form--register" action="">
                        <h3 className="form__title">Mot de passe oublié?!</h3>

                        <div className="form__helper">
                            <CssTextField
                                required
                                id="standard-required"
                                label="Username"
                                className='form__input'
                            />
                        </div>

                        <div className="form__helper">
                            <CssTextField
                                id="standard-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                className='form__input'
                            />
                        </div>
                        <button type="submit" className="form__button">Envoyer demande</button>

                        <p className="form__text">Vous avez un compte <label htmlFor="toggle" className="form__link"> Connectez-vous!</label></p>
                    </form>

                    <form className="form form--login" onSubmit={handleSubmit(onSubmit)}>
                      {message && (
                          <div
                            className={`alert fade show d-flex ${message.type}`}
                            role="alert"
                          >
                            {message.data}
                            <span
                              aria-hidden="true"
                              className="ml-auto cursor-pointer"
                              onClick={() => setMessage(null)}
                            >
                              &times;
                            </span>
                          </div>
                        )}
                        <h3 className="form__title">Login</h3>

                        <div className="form__helper">
                            <input
                                name="username"
                                className='form__input'
                                ref={register({
                                    required: true,
                                    pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
                                })}
                            />
                            {errors.username && errors.username.type === "required" && (
                                <p>Username is required</p>
                            )}
                            {errors.username && errors.username.type === "pattern" && (
                                <p>Username is not an email format</p>
                            )}
                        </div>

                        <div className="form__helper">
                            <input
                                type="password"
                                className='form__input'
                                name="password"
                                ref={register({
                                    required:true,
                                    minLength: 4
                                })}
                            />
                            {errors.password && errors.password.type === "required" && (
                                <p>Password is required</p>
                            )}
                            {errors.password && errors.password.type === "minLength" && (
                                <p>Password must have at least 5 characters</p>
                            )}
                        </div>

                        <button type="submit" className="form__button" >Connectez-vous</button>

                        <p className="form__text">Vous n'avez pas un compte
                            <label htmlFor="toggle" className="form__link"> Créez un demande</label>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Login;
