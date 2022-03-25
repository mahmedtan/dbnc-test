import type { NextPage } from "next";
import { useState } from "react";
import List from "../components/List";
import Search from "../components/Search";

const Home: NextPage = () => {
  const [relatedWords, setRelatedWords] = useState<string[]>([]);

  console.log(relatedWords);

  return (
    <div className="h-screen flex pt-32 justify-center px-6 sm:px-0">
      <div className="flex flex-col w-full max-w-xl gap-8 items-center">
        <h1 className="text-5xl">Find Rhymes</h1>

        <Search setRelatedWords={setRelatedWords} />
        <List relatedWords={relatedWords} />
      </div>
    </div>
  );
};

export default Home;
