
interface props{
  addNode:any;
}

const Header = ({addNode}:props) => {
  return (
    <div className="bg-gray-300 w-[100%] h-[80px] flex items-center justify-end px-[5rem] py-[10px]">
        <div className="border-2 border-black rounded-md w-[200px] text-center flex items-center justify-center
        h-[45px] bg-[#fff] text-[blue] cursor-pointer hover:bg-blue-100 font-semibold"
        onClick={addNode}
        >
            Save Changes</div>
    </div>
  )
}

export default Header