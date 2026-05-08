
function Tracker(props){

  const saved = props.saved
  const applied = props.applied
  const interview = props.interview
  const jobs = props.jobs


  return (

    <div style={{
      background:"white",
      padding:"18px",
      borderRadius:"10px",
      marginTop:"20px"
    }}>

      <h2>Application Tracker</h2>

      <p>Total Jobs : {jobs.length}</p>
      <p>Saved : {saved.length}</p>
      <p>Applied : {applied.length}</p>
      <p>Interview : {interview.length}</p>
    </div>

  )
}

export default Tracker