import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import styles from "../app/modules/styles.module.css";
import TodosList from "../components/TodosList.tsx";
import Filter from "../components/Filter.tsx";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: todos } = await supabase.from("todos").select();

  return (
      <section className={`${styles.section} w-full`}>
        <div className={styles.header}>
          <h1>This is a todo list example with supabase</h1>
          <Filter />
        </div>
          <TodosList todos={todos} />
      </section>
  );
}
