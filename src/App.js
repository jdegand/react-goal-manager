import { useEffect, useState } from 'react';
import Goal from './components/Goal';
import './App.css';
import base from './api/base';

function App() {

  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(()=> {
    base("goals")
      .select({view: "Grid view"})
      .eachPage((records, fetchNextPage)=> {
        setGoals(records);
        fetchNextPage();
      })

      
    base("progress")
      .select({view: "Grid view"})
      .eachPage((records, fetchNextPage)=> {
        setUpdates(records);
        fetchNextPage();
    })
  
  }, [])

  let goalElements = goals.map(goal => {

    let allUpdates = updates.filter(update => update.fields.goalid[0] === goal.id);

    return (
      <Goal key={goal.id} 
        goal={goal} 
        updates={allUpdates}
      />  
    )
  })

  return (
    <div className="App">
      <h1>My Goals</h1>
      {goalElements}
    </div>
  );
}

/* after goalElements */
/* <iframe src="https://airtable.com/embed/process.env.REACT_APP_IFRAME_EMBED_KEY?backgroundColor=teal"></iframe> */

export default App;
