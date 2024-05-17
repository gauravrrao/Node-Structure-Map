
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

interface props{
    nodes:any;
    edges:any;
    onNodesChange:any;
    onEdgesChange:any;
    onConnect:any;
    nodeTypes:any;
}

const LScreen = ({nodes,edges,onNodesChange, onEdgesChange, onConnect, nodeTypes}:props) => {
  return (
    <div className="flex justify-center items-center w-[80vw] h-[100vh]">
      <ReactFlow
        nodes={nodes.map((node:any) => ({
          ...node,
          style: {
            backgroundColor: '#fff',
            border: 0,
            boxShadow: "10px 14px 16px 5px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: 0,
            width:'220px'
          },
        }))}
        edges={edges.map((edge:any) => ({
            ...edge,
            targetPosition: 'right'
          }))}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

export default LScreen;
