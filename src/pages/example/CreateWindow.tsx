import { useCreateWindow } from '@/hooks/UseCreateWind'

export default function CreateWindow() {
    const { createWebviewWindow } = useCreateWindow()
    const handleCreate = async () => {
        console.log('handleCreate')
        const wind = await createWebviewWindow('设置', 'crwind', 600, 340)
        console.log('wind', wind)
    }

    return (
        <>
            <button onClick={handleCreate}>create wind</button>
        </>
    )
}
