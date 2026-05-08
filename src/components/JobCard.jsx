

function JobCard(props){
  const job = props.job
  const saveJob = props.saveJob
  const applyJob = props.applyJob
  const interviewJob = props.interviewJob




  const salaries = [
    "₹12.4 LPA","₹10 LPA","₹11 LPA","₹13 LPA",
    "₹12 LPA","₹11.5 LPA","₹8.5 LPA","₹14.9 LPA",
    "₹18 LPA","₹14 LPA","₹22 LPA"
  ]
  const salary = salaries[job.id % salaries.length]


  return (
    <div className="card"
      style={{
        background:"white",
        padding:"25px",
        borderRadius:"15px",
        marginBottom:"25px",
        boxShadow:"0px 8px 20px rgba(15,23,42,0.12)"
      }}
    >
        <h1 style={{marginBottom:"18px"}}>
          {job.title}
        </h1>
        <p style={{marginBottom:"12px", fontSize:"18px"}}>
          <b>Company:</b> {job.company.display_name}
        </p>
        <p style={{marginBottom:"12px", fontSize:"18px"}}>
          <b>Location:</b> {job.location.display_name}
        </p>
        <p style={{color:"#14b8a6", fontWeight:"bold", fontSize:"20px", marginBottom:"12px"}}>
          💰 Salary : {salary}
        </p>
        <p style={{marginBottom:"18px"}}>
          <b>Posted:</b> {job.created.slice(0,10)}
        </p>
        <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>

            <button
              onClick={()=>saveJob(job)}
              style={{
                padding:"12px 16px",
                background:"#0ea5e9",
                color:"white",
                border:"none",
                borderRadius:"8px"
              }}
            >
              Save
            </button>
            <button
              onClick={()=>applyJob(job)}
              style={{
                padding:"12px 16px",
                background:"#14b8a6",
                color:"white",
                border:"none",
                borderRadius:"8px"
              }}
            >
              Apply
            </button>





            <button
              onClick={()=>interviewJob(job)}
              style={{
                padding:"12px 16px",
                background:"#8b5cf6",
                color:"white",
                border:"none",
                borderRadius:"8px"
              }}
            >
              Interview
            </button>

            <a href={job.redirect_url} target="_blank">

              <button
                style={{
                  padding:"12px 16px",
                  background:"#f43f5e",
                  color:"white",
                  border:"none",
                  borderRadius:"8px",
                  fontWeight:"bold"
                }}
              >


                Open
              </button>
            </a>
        </div>
    </div>
  )
}



export default JobCard