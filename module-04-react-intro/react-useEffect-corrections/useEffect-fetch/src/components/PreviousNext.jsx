import Btn from "./Btn";

function PreviousNext({ previousUrl, nextUrl, setUrl }) {
  return (
    <div className="flex justify-center gap-4 pt-6">
      <Btn content="Previous" currentUrl={previousUrl} setUrl={setUrl} />
      <Btn content="Next" currentUrl={nextUrl} setUrl={setUrl} />
    </div>
  );
}

export default PreviousNext;
