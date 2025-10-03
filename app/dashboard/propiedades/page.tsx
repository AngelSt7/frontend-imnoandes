import { ClientPageProperties } from "@/src/features/property/admin/subfeatures/ClientPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "@/src/features/shared";

export default async function page() {

  const cookieStore = await cookies();
  const jwt = cookieStore.get("SESSION")?.value;
  
  if (!jwt) redirect("/auth/iniciar-sesion");
  
  const user = await User.validate(jwt);
  if (!user) redirect("/auth/iniciar-sesion");

  return (
    <div className="custom-container">
      <ClientPageProperties user={user} />
    </div>
  );
}