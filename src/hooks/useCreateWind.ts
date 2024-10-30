import { WebviewWindow } from '@tauri-apps/api/WebviewWindow'

export const useCreateWindow = () => {
    /**
     * 创建窗口
     * @param title 窗口标题
     * @param label 窗口名称
     * @param wantCloseWindow 创建后需要关闭的窗口
     * @param width 窗口宽度
     * @param height 窗口高度
     * @param isDrag 是否禁止拖动元素
     * @param resizable 调整窗口大小
     * @param minW 窗口最小宽度
     * @param minH 窗口最小高度
     * */
    const createWebviewWindow = async (
        title: string,
        label: string,
        width: number,
        height: number,
        resizable = false,
        minW = 400,
        minH = 300
    ) => {

        const webview = new WebviewWindow(label, {
            title: title,
            // url: 'https://github.com/tauri-apps/tauri',
            // url: 'tauri://localhost/', // asset not found: index.html
            // url: 'http://tauri.localhost/', // asset not found: index.html
            // url: 'http://localhost:5173/', // successfully
            url: '/tray', // successfully
            resizable: resizable,
            width: width,
            height: height,
            minHeight: minH,
            minWidth: minW,
            center: true,
            fullscreen: false,
            skipTaskbar: false,
            decorations: true,
            transparent: false,
            dragDropEnabled: true
        })


        await webview.listen('tauri://created', async (e) => {
            const webviewT = webview
            console.log('tauri://created', e);
            console.log('webviewT', webviewT);
        })

        await webview.once('tauri://error', async (e) => {
            console.log('errtauri://error', e.payload);
        })

        return webview
    }


    return {
        createWebviewWindow,
    }
}
