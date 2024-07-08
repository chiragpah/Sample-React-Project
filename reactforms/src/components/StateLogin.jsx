
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../utils/validation";
import { useInput } from "../hooks/useInput";
export default function StateLogin() {
    const { value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailHasError } = useInput('', (value) => isEmail(value) && isNotEmpty(value))
    const { value: passwordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError } = useInput('', (value) => hasMinLength(value, 6))
    function handleSubmit(event) {
        event.preventDefault();
        if (passwordHasError || emailHasError)
            return
        console.log(emailValue, passwordValue);

    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="control-row">
                <Input id="email" label="Email" type="email" name="email" onChange={handleEmailChange} value={emailValue} onBlur={handleEmailBlur} error={emailHasError && 'Enter a valid mail Id'} />
                <Input label="Password" id="password" type="password" name="password" onChange={handlePasswordChange} value={passwordValue} onBlur={handlePasswordBlur} error={passwordHasError && 'Enter a valid password!'} />

            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form >
    )
}