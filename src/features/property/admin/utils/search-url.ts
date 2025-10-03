import toast from "react-hot-toast"

export const searchUrl = (url: string) => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_FRONTEND_URL}${url}`)
    toast.success("Enlace copiado al portapapeles, puedes compartirlo con tus clientes o a tus colaboradores")
}