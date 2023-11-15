import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import  EditForm  from "../../../components/EditForm";
export default async function Page({ params }: { params: { slug: string } }) {
    const supabase = createServerComponentClient({ cookies });
    const { data: todo } = await supabase.from("todos").select().eq("id", params.slug).maybeSingle();

    return (
        <div className="container mx-auto">
            <h1>Edit todo {params.slug}</h1>
            <div className="form-group">
                <EditForm
                    item={todo}
                />
            </div>
        </div>
    )
}