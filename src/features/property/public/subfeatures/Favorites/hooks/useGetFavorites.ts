import { Favorite } from "@/src/features/shared"
import { useUser } from "@/src/features/user"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useFavorites } from "@/src/features/property/public/hooks"
import { useQueryParam } from "@/src/myLib"

export const useGetFavorites = () => {
  const params = useSearchParams()
  const router = useRouter()
  const user = useUser()
  const { getParam } = useQueryParam()

  const entries = Array.from(params.entries())

  let page = Number(params.get("page"))
  const isValid =
    entries.length === 1 && 
    entries[0][0] === "page" &&
    !isNaN(page) &&
    page >= 1

  if (!isValid) {
    router.replace("/dashboard/favoritos?page=1")
    page = 1
  }

  const { data: Properties, isLoading } = useQuery({
    queryKey: ["favorites", user?.id, page],
    queryFn: () => Favorite.list(page),
    refetchOnWindowFocus: false,
    retry: false,
    placeholderData: keepPreviousData,
    enabled: !!user
  })

  const { isFavorite, toggleFavorite } = useFavorites()

  if (Properties && Properties.meta) {
    const currentPage = Number(getParam("page"))
    if (currentPage > Properties.meta.totalPages) {
      router.replace("/dashboard/favoritos?page=1")
    }
  }

  return { Properties, isLoading, isFavorite, toggleFavorite }
}
