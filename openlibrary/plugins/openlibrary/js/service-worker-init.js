export default function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/sw.js')
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.error(`Service worker registration failed: ${error}`);
                });
        });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
    });
}
