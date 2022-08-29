import ItemCount from "../ItemCount/ItemCount";

function onAdd(){
  console.log("Se han añadido " );
}

const Main = () => {
    return (
      <div className="contador">
        <ItemCount 
          stock={10} 
          initial={0} 
          onAdd = {onAdd}>
        </ItemCount>
      </div>
    )
};
  
export default Main;
  