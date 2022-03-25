import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

type ISearchProps = {
  setRelatedWords: (val: string[]) => void;
};

const Search = ({ setRelatedWords }: ISearchProps) => {
  const [word, setWord] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data }: { data: { word: string }[] } = await axios.get(
      `https://api.datamuse.com/words?rel_rhy=${word}`
    );

    setWord("");
    setRelatedWords(data.map((item) => item.word));
  };
  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <div className="flex  gap-2 w-full">
        <input
          type="text"
          onChange={({ target }) => setWord(target.value)}
          value={word}
          className="focus:outline-none border focus:ring focus:ring-primary transition-all duration-200  px-4 py-3 rounded-md text-lg w-full  shadow-lg"
        />
        <button
          type="submit"
          className="bg-gradient-to-br font-light focus:outline-none focus:ring focus:ring-primary from-primary to-blue-700  rounded-md shadow-xl py-3 px-4 text-white text-xl"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
