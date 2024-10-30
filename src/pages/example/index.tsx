import WindTray from '@/components/WindTray'
import CallRustFEPage from './CallRustFE'
import ChangeTheme from './Theme'
import CreateWindow from './CreateWindow'

export default function ExamplePage() {
    return (
        <>
            <h1>command::</h1>
            <CallRustFEPage />
            <h1>setTheme</h1>
            <ChangeTheme />
            <h1>system tray</h1>
            <WindTray />
            <h1>create wind</h1>
            <CreateWindow />
        </>
    )
}
