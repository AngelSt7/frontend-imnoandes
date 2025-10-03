export function normalize(str: string) {
    return decodeURIComponent(str).normalize("NFC");
}