const FilterButton = (props) => {
    let NewAge=props.Age/2;
    return (
   <div>
     <p> Name={props.name}</p>
     <p>Address={JSON.stringify(props.address)}</p>
     <p>Marks={String(props.marks)}</p>
     <p>Age={NewAge}</p>
     </div>
    );
  };
  
  export default FilterButton;