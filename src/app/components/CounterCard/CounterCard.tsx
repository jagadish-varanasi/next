import { CountAction, CountActionKind } from "@/app/reducers/reducer";
import { Dispatch, useState } from "react";

const CounterCard: React.FC<{
  count: number;
  dispatch: Dispatch<CountAction>;
}> = ({ count, dispatch }) => {
  const [input, setInput] = useState("");

  const handleAction = (type: CountActionKind) => {
    dispatch({
      type,
      payload: +input,
    });
    setInput("");
  };

  return (
    <div className="flex-1 flex bg-gray-200 justify-center items-center py-10 mb-4">
      <div className="w-5/6">
        <div className="text-sm text-gray-600 mb-2">Current Value:</div>
        <span
          className={`text-5xl font-bold ${
            count > 0 ? `text-green-400` : `text-red-400`
          }`}
        >
          {count}
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-gray-400 border-2 w-full my-8 p-1.5"
        />
        <div className="flex w-full gap-8">
          <button
            className=" flex-1 bg-gray-700 text-white p-2"
            onClick={() => handleAction(CountActionKind.ADD)}
          >
            Add
          </button>
          <button
            className="flex-1 bg-gray-600 text-white p-2"
            onClick={() => handleAction(CountActionKind.SUBTRACT)}
          >
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
