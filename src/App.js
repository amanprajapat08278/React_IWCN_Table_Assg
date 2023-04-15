import { useState } from 'react';
import './App.css';

function App() {

  const [tableData, setTableData] = useState([
    { month1: "Onboarding Call", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Google Search Console Access", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Google Analytics Access", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Website Access", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Technical Audit", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Anchor Text and Semantic Analysis", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Competitor Analysis", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Anchor Text/URL Mapping", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Google Data Studio Report + Local Reporting Sulte", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Site Level Optimization", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "On Page Optimization", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Content Creation", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Content Publishing", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Premium Press Release", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Authority Niche Placements", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Review Management", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Index Links", one: null, two: null, three: null, four: null, five: null, six: null },
    { month1: "Video Recap", one: null, two: null, three: null, four: null, five: null, six: null },
  ])

  const changeTableData = (e, i, key) => {
    let newArr = [...tableData]
    newArr[i][key] = e.target.value
    setTableData(newArr)
  }

  const printData = () => {
    console.log(tableData)
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th className='monthBox'>MONTH 1</th>
            <th>One</th>
            <th>Two</th>
            <th>Three</th>
            <th>Four</th>
            <th>Five</th>
            <th>Six</th>
          </tr>
        </thead>

        <tbody className='tableBody'>
  
          {tableData.map((x, i) => {
            return <tr className='rows' key={i}>
              <td  className='monthBox' >{x.month1}</td>
              <td><input type='text' value={x.one===null?"":x.one} onChange={(e) => changeTableData(e, i, "one")} /></td>
              <td><input type='text' value={x.two===null?"":x.two} onChange={(e) => changeTableData(e, i, "two")} /></td>
              <td><input type='text' value={x.three===null?"":x.three} onChange={(e) => changeTableData(e, i, "three")} /></td>
              <td><input type='text' value={x.four===null?"":x.four} onChange={(e) => changeTableData(e, i, "four")} /></td>
              <td><input type='text' value={x.five===null?"":x.five} onChange={(e) => changeTableData(e, i, "five")} /></td>
              <td><input type='text' value={x.six===null?"":x.six} onChange={(e) => changeTableData(e, i, "six")} /></td>
            </tr>
           
          })}

        </tbody>

      </table>
      <div id='msgBox'>
        <span>To print table data in console Click here👇</span>
        <button onClick={printData}>Print Data</button>
      </div>
      
    </div>
  );
}

export default App;
