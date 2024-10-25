import CallRustFEPage from './CallRustFE'
import ChangeTheme from './Theme'

export default function ExamplePage() {
    return (
        <>
            <h1>command::</h1>
            <CallRustFEPage />
            <h1>setTheme</h1>
            <ChangeTheme />
        </>
    )
}
