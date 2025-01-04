import TabButton from './TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples.js';
import Section from './Section.jsx';

export default function Examples() {

      const [selectedTopic, setSelectedToppic] = useState();
       
      function selectHandler(selectedButton){ 
         setSelectedToppic(selectedButton);
         console.log(selectedTopic);
       }
    
      console.log('APP COMPONENT EXECUTING');
    
      let tabContent = <p>Please select thee topic</p>;
      if(selectedTopic){
        tabContent = (
          <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
        );
      } 

    return (
        <Section title='Examples' id ='examples'>
        <h2>Example</h2>
        <menu>
          <TabButton isSlected = {selectedTopic === 'components'} 
          onSelect = {() => selectHandler('components')}>Components</TabButton>

          <TabButton isSlected = {selectedTopic === 'jsx'}
          onSelect={() => selectHandler('jsx')}>JSX</TabButton>

          <TabButton isSlected = {selectedTopic === 'props'}
          onSelect={() => selectHandler('props')}>Props</TabButton>

          <TabButton isSlected = {selectedTopic === 'state'}
          onSelect={() => selectHandler('state')}>State</TabButton>
        </menu>
       {tabContent}
       </Section>
    );
}