import { CountActionKind } from "@/app/reducers/reducer";
import { formatMessage } from "@/app/utils/formate";

const History: React.FC<{
  history: Array<{
    opId: number;
    prevValue: number;
    type: CountActionKind;
    opValue: number;
  }>;
}> = ({ history }) => (
  <div className="flex-1 bg-gray-300 flex justify-center py-10 h-[80vh] overflow-y-auto mb-4">
    <div className="w-11/12">
      <div className="bg-green-200 p-1 text-green-700 text-xl">History</div>
      {!history.length && (
        <div className="flex justify-center items-center h-full">
          No history.
        </div>
      )}
      {history.map(({ opId, prevValue, type, opValue }) => (
        <div key={opId} className=" bg-gray-100 p-2 my-2  gap-2">
          {formatMessage(prevValue, type, opValue)}
        </div>
      ))}
    </div>
  </div>
);

export default History;
