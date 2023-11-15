import styles from "../app/modules/styles.module.css";
import Main from '../components/Main'

export default async function Index() {
  return (
      <section className={`${styles.section} w-full`}>
        <div className={styles.header}>
          <h1>This is a todo list example with supabase</h1>
          <Main />  
        </div>
      </section> 
  );
}
