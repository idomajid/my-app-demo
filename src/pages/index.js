import Head from "next/head";
import ContactForm from "../components/ContactForm";
import supabase from "./api/supabase";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("DemoApp").select("*");

        if (error) {
          throw error;
        }

        setData(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Next.js Form Example</title>
        <meta name="description" content="Next.js Form Example" />
      </Head>

      <main>
        <section>
          <h1>Contact Us</h1>
          <ContactForm />
        </section>
        <section>
          {data.map((item) => (
            <ul key={item.id}>
              <li>
                <span>id: </span>
                {item.id}
              </li>
              <li>
                <span>name: </span>
                {item.name}
              </li>
              <li>
                <span>email: </span>
                {item.email}
              </li>
              <li>{item.absent}</li>
            </ul>
          ))}
        </section>
      </main>

      <footer>{/* Your footer content */}</footer>
    </div>
  );
}
