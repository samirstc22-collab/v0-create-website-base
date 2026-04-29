import { redirect } from "next/navigation"

// Pagina unificada — todo o conteudo de IA agora vive em /ia (iA Labs)
export default function LevaIAPage() {
  redirect("/ia")
}
