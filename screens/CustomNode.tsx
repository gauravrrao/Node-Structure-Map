import { Handle, Position } from "reactflow";

interface props{
    data:any
}

const CustomNode = ({ data }:props) => {
  return (
    <div className="custom-node">
      {data.label}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default CustomNode;
