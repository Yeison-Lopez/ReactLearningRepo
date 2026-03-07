import './TODOlist.css';

function TODOlist({children}){
  return(
    <ul className='TODOlist'>
        {children}
    </ul>
  );
}

export { TODOlist };