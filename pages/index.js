import Head from "next/head";
import Image from "next/image";
import OpinionCard from "../components/OpinionCard";
import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [opinions, setOpinions] = useState(null);

  useEffect(() => {
    const fetchOpinions = async () => {
      const { data, error } = await supabase.from("opinions").select();

      // if failed
      if (error) {
        setFetchError("failure!!!!");
        setOpinions(null);
        console.log(error);
      }

      // if good
      if (data) {
        setOpinions(data);
        setFetchError(null);
      }
    };

    fetchOpinions();
  }, []);

  return (
    <main>
      {fetchError && <p>fetchError</p>}
      {opinions && (
        <div className="flex flex-col space-y-5">
          {opinions.map((opinion) => (
            <OpinionCard key={opinion.id} opinion={opinion} />
          ))}
        </div>
      )}
    </main>
  );
}
