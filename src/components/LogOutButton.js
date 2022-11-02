import {useMsal} from '@azure/msal-react';

export const LogOutButton = () => {
    const {instance}  = useMsal();

    const handleLogOut = () => {
        instance.logoutRedirect()
    }
    return (
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogOut}>LogOut</button>
    )
}

