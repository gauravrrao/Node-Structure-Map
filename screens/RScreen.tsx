import { ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";

interface Props {
  newNodeLabel: string;
  setNewNodeLabel: (value: string) => void;
}

const RScreen = ({ newNodeLabel, setNewNodeLabel }: Props) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="border-l-2 border-gray-200 w-[20%] h-[100vh] py-[10px]">
      <div className="flex w-[100%] items-center border-b-2 border-gray-300 pb-[10px]">
      {showInput && (
            <div className="px-[10px] absolute cursor-pointer" onClick={() => setShowInput(!showInput)}>
              <ArrowLeftOutlined />
            </div>
          )}
        <p className="w-[100%] gap-3 flex justify-center px-[10px] cursor-default text-center">
          Message
        </p>
      </div>
      {showInput ? (
        <div className="flex justify-center px-[20px] flex-col pt-[1rem] relative">
          <p className="flex justify-start w-[100%]">Text</p>
          <input
            type="text"
            className="min-w-[200px] min-h-[120px] border-2 border-gray-400 rounded-md px-[10px]"
            placeholder="Enter Node Label"
            value={newNodeLabel}
            onChange={(e) => setNewNodeLabel(e.target.value)}
          />
        </div>
      ) : (
        <div
          className="border-2 border-blue-500 rounded-md w-[150px] cursor-pointer hover:bg-gray-100 text-center mt-[1rem] ml-[1rem] py-[20px] px-[40px] text-[blue]"
          onClick={() => setShowInput(!showInput)}
        >
          <p>Message</p>
        </div>
      )}
    </div>
  );
};

export default RScreen;
