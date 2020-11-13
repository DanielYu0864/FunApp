import './Login.scss';

const Login = props => {

    return (
        <section className="login">

            <div className="login__form">

                <div className="login__form-container">
                    <div className="login__form-group">
                        <label className="login__label">Email Address</label>
                        <input type="email" className="login__input" placeholder="hello@fun.com"/>
                    </div>
                    
                    <div className="login__form-group">
                        <label className="login__label">Password</label>
                        <input type="password" className="login__input" />
                    </div>

                    <button className="login__btn">Login</button>
                </div>

            </div>

            <div className="login__illustration">
                <img src="/illustration.svg" />
            </div>

        </section>

    )
        
}

export default Login;