

function Sidebar(props){

  const saved = props.saved
  const applied = props.applied
  const interview = props.interview


  return (

    <div id="dashboard"
      style={{
        background:"white",
        padding:"20px",
        borderRadius:"12px",
        height:"fit-content",
        boxShadow:"0px 4px 15px rgba(0,0,0,0.1)",
        position:"sticky",
        top:"100px"
      }}
    >

      
      <h2>Dashboard</h2>
      <div style={{marginTop:"15px", lineHeight:"30px"}}>
        <p>📌 Saved Jobs : {saved.length}</p>
        <p>✅ Applied Jobs : {applied.length}</p>
        <p>🎯 Interviews : {interview.length}</p>
      </div>
      <hr style={{margin:"18px 0"}} />
      <h3>Quick Tips</h3>
      <ul style={{paddingLeft:"18px", lineHeight:"28px"}}>
        <li>Apply daily</li>
        <li>Update resume sometimes</li>
        <li>Search React, Python, Java</li>
        <li>Track applications</li>
      </ul>
    </div>

  )
}

export default Sidebar