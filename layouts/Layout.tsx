import {ReactNode} from "react";
import GlobalNavigation from "../components/GlobalNavigation";

const Layout = ({children}: {children: ReactNode}) => {
    return(
        <>
            <GlobalNavigation />
            {children}
        </>
    )
}

export default Layout