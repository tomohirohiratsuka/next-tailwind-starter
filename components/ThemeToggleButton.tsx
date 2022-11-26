import {MoonIcon, SunIcon} from "@heroicons/react/20/solid";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

const ThemeToggleButton = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    const {theme, setTheme} = useTheme()
    const handleClick = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return(
        <button onClick={() => handleClick()} aria-label={'themeToggle'} type={'button'}>
            {mounted && (
                theme === 'dark' ? <MoonIcon className={'h-5 w-5'} /> : <SunIcon className={'h-5 w-5'} />
            )}
        </button>
    )
}

export default ThemeToggleButton