import {useMsal} from '@azure/msal-react';

export const LoginButton = () => {
    const {instance}  = useMsal();

    const handleLogin = async () => {
        await instance.loginRedirect({
            scopes: ['user.read']
        })
    }
    return (
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogin}>LogIn</button>
    )
}

