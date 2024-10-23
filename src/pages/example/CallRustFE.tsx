import { useEffect } from 'react'

// When using the Tauri API npm package:
import { invoke } from '@tauri-apps/api/core'

// Invoke the command
async function handleCommand1() {
    let res = await invoke('my_custom_command1')
    console.log('Invoke command called: ' + res)
    return res
}

async function handleCommand2() {
    let res = await invoke('my_custom_command2')
    console.log('Invoke command called: ' + res)
    return res
}

export default function CallRustFEPage() {
    useEffect(() => {
        handleCommand1()
    }, [])

    return (
        <>
            <button className='space' onClick={handleCommand1}>
                GetRustComandFN1
            </button>
            <button className='space' onClick={handleCommand2}>
                GetRustComandFN2
            </button>
        </>
    )
}
