import ThemeToggleButton from "./ThemeToggleButton";

const GlobalNavigation = () => {
    return (
        <div className="header-2">
            <nav className={'py-2 px-4'}>
                <div className="flex flex-row">
                    <ThemeToggleButton />
                </div>
            </nav>
        </div>

    )
}

export default GlobalNavigation