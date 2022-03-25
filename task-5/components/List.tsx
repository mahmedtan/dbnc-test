type IListProps = {
  relatedWords: string[];
};

const List = ({ relatedWords }: IListProps) => {
  console.log(relatedWords);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-8 pb-16">
      {relatedWords.map((item) => (
        <div
          className="w-full  h-32 px-8 text-center shadow-md rounded-xl text-xl flex items-center border justify-center"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
