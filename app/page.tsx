import Image from "next/image";
import styles from "./page.module.css";
import prisma from '@/lib/db'

export default async function Home() {
  const models = await prisma.model.findMany();

  return (
    <div className={styles.page}>
      <h1>
        На экране {models.length} модели
      </h1>
      <main className={styles.main}>
        {
          models.map((model) => (
            <div key={model.id}>
              <h2>{model.model_title}</h2>
              <p>{model.model_class}</p>
            </div>
          ))
        }
      </main>
    </div>
  );
}
