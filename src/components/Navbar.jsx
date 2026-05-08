

function Navbar(){

  function goToJobs(){
    const jobs = document.getElementById("jobs")
    if(jobs){
      jobs.scrollIntoView({behavior:"smooth"})
    }
  }


  function goToDashboard(){
    const dashboard = document.getElementById("dashboard")
    if(dashboard){
      dashboard.scrollIntoView({behavior:"smooth"})
    }
  }
  
  return (
    <div style={{
      background:"linear-gradient(to right,#0f172a,#1e3a8a,#06b6d4)",
      color:"white",
      padding:"15px 30px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      position:"sticky",
      top:0,
      boxShadow:"0px 2px 10px rgba(0,0,0,0.2)"
    }}>
      <h2 style={{margin:0}}>ApplyFlow</h2>
      <div style={{display:"flex", gap:"12px"}}>
        <button
          onClick={goToJobs}
          style={{
            padding:"10px 18px",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
          }}
        >
          Jobs
        </button>
        <button
          onClick={goToDashboard}
          style={{
            padding:"10px 18px",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  )
}

export default Navbar