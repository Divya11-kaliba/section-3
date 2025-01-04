export default function TabButton({children, onSelect, isSlected}){

    console.log('TAB BUTTON COMPONENT EXECUTING');

    return <li>
             <button className = {isSlected ? "active" : undefined} onClick={onSelect}>
                {children}</button>
            </li>;
}