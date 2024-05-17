import { message } from "antd";
import Header from "./Header";
import LeftScreen from "./RScreen";
import RightScreen from "./LScreen";
import { useCallback, useState } from "react";
import { Connection, addEdge, useEdgesState, useNodesState } from "reactflow";
import CustomNode from './CustomNode';

const initialNodes = [
  { id: '1', position: { x: 50, y: 210 },type: 'customNode', data: { label:<>
  <h2 className="bg-emerald-200 rounded-t-lg py-[7px] flex justify-start px-[10px] font-semibold text-[15px]">Send Message</h2>
  <p className="py-[10px] px-[20px] text-[16px]">message 1</p>
  </> } },
  { id: '2', position: { x: 400, y: 310 },type: 'customNode', data: { label: <>
  <h2  className="bg-emerald-200 py-[7px] rounded-t-lg flex justify-start px-[10px] font-semibold text-[15px]">Send Message</h2>
  <p className="py-[10px] px-[20px] text-[16px]">message 2</p>
  </> } },
];
const initialEdges = [{ id: '32', source: '1', target: '2' }];

const nodeTypes = {
  customNode: CustomNode,
};

const Preview = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [messageApi, contextHolder] = message.useMessage();

  const [newNodeLabel, setNewNodeLabel] = useState('');

  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, id: `${edges.length + 1}` };
    setEdges(prevedges => addEdge(edge, prevedges));
  }, []);

  const addNode = useCallback(() => {
    if (!newNodeLabel.trim()) {
      messageApi.error('Cannot Save Flow');
      return;
    }
    const newId = `${nodes.length + 1}`;
    const newNode = {
      id: newId,
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      type: 'customNode',
      data: {
        label: (
          <>
            <h2 className="bg-emerald-200 rounded-t-lg py-[7px] flex justify-start px-[10px] font-semibold text-[15px]">
              Send Message
            </h2>
            {newNodeLabel && <p className="py-[10px] px-[20px] text-[16px]">{newNodeLabel}</p>}
          </>
        )
      },
    };
    setNodes(prevNodes => [...prevNodes, newNode]);
    setNewNodeLabel('');
  }, [nodes, newNodeLabel]);
  return (
    <>
    {contextHolder}
      <Header addNode={addNode}/>
      <div className="flex w-[100%] min-h-[100%] ">
      <RightScreen
      nodes={nodes} edges={edges}
      onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes}
      />
      <LeftScreen newNodeLabel={newNodeLabel}
      setNewNodeLabel={setNewNodeLabel}/>
      </div>
    </>
  )
}

export default Preview;