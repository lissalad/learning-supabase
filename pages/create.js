import classNames from "classnames";
import Error from "../components/Error";
import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formError, setFormError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if all fields completed
    if (!title || !content) {
      setFormError("Please complete the form.");
      return;
    }

    // if so, create row
    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, content }])
      .select();
ç
    // row failed
    if (error) {
      console.log(error);
      setFormError("Please complete the form.");
    }

    console.log({ data, error });

    // row good! HELP!!!!
    if (data) {
      console.log(title, content);
      console.log(data);
      setFormError(null);
      router.push("/");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {/* title */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* content */}
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* button */}
        <button>Create</button>

        {/* error message */}
        {formError && <p>{formError}</p>}
      </form>
    </main>
  );
}
