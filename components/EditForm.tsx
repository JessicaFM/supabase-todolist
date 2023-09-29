'use client'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Input, Button } from "@nextui-org/react";
import { createClient } from '@supabase/supabase-js'


export default function EditForm({item}: any) {
    const router = useRouter()
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    async function saveForm() {
        const { error } = await supabase
            .from('todos')
            .update({ description: item.description })
            .eq('id', item.id)
        if(!error) {
            router.push('/')
        } else {
            // TODO
        }
    }

    function handleChange(e: any) {
        item.description = e.target.value
    }

    return (
        <div>
            <div className="form-group">
                <Input type="text" label="Description" 
                    onChange={handleChange}
                    defaultValue={item.description} />
            </div>
            <div className="form-group">
                <Button color="primary"
                    onClick={saveForm}>
                    Save
                </Button>
            </div>
        </div>
    )
}