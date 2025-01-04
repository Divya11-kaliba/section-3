import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {
 
  return (
    <>
      <Header />
      <main>
      <CoreConcepts />
      <Examples />
       
      </main>
    </>
  );
}

export default App;




// {!selectedTopic && <p> Please select the topic.</p>}
//         {selectedTopic && (
//           <div id="tab-content">
//           <h3>{EXAMPLES[selectedTopic].title}</h3>
//           <p>{EXAMPLES[selectedTopic].description}</p>
//           <pre>
//             <code>
//               {EXAMPLES[selectedTopic].code}
//             </code>
//           </pre>
//         </div>
//         )}