
function LoginButton({setLogin,login}) {
    const hanldeSubmit = (event) => {
        console.log('loginHere:',login)
    };
    return (
        <div >
            <button className="loginButton" onClick={hanldeSubmit}>Login</button>
        </div>
    )
}
export default LoginButton;
// // setLogin(true)
// console.log(setLogin)
// // localStorage.setItem('loginKey', true);
// // window.location.reload(true);
// setLogin(!login);