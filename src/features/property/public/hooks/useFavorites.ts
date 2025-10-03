import { Favorite } from "@/src/features/shared";
import { useUser } from "@/src/features/user/contexts";
import { useGetData } from "@/src/myLib";
import { useSubmitMutation } from "@/src/myLib";
import { useAppStore } from "@/src/store/useAppStore";
import toast from "react-hot-toast";

export function useFavorites() {
    const onChangeLogin = useAppStore((state) => state.onChangeLogin);

    const user = useUser();

    const { data: idsFavorites = [] } = useGetData({
        functionService: () => (user ? Favorite.ids() : Promise.resolve([])),
        queryKey: ["favorites-ids", user?.id],
    });

    const { mutate: create } = useSubmitMutation({
        serviceFunction: Favorite.create,
        invalidateQueries: [
            ["favorites", user?.id],
            ["favorites-ids", user?.id],
        ],
    });

    const { mutate: remove } = useSubmitMutation({
        serviceFunction: Favorite.delete,
        invalidateQueries: [
            ["favorites", user?.id], 
            ["favorites-ids", user?.id]
        ],
    });

    const list = new Set(idsFavorites);

    const isFavorite = (id: string) => list.has(id);

    const toggleFavorite = (id: string) => {
        if (!user) {
            onChangeLogin();
            toast.error("Debes iniciar sesión para dar me gusta ❤️");
            return;
        }

        if (isFavorite(id)) {
            remove(id);
        } else {
            create(id);
        }
    };

    return {
        favorites: idsFavorites,
        isFavorite,
        toggleFavorite,
    };
}
