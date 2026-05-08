



function Hero(props){
  const search = props.search
  const setSearch = props.setSearch
  const handleSearch = props.handleSearch



  return (
    <div style={{background:"linear-gradient(to right,#0f172a,#1e3a8a,#06b6d4)",
      color:"white",padding:"50px 20px",textAlign:"center"}}>

      <h1 style={{fontSize:"42px", marginBottom:"15px"}}>
          Find Your Dream Job
           </h1>
        <p style={{fontSize:"18px",marginBottom:"25px"}}>
        Search internships, remote jobs and top tech roles
           </p>


        <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
            <input
              type="text"
              placeholder="Search jobs"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              style={{
                padding:"14px",
                width:"320px",
                border:"none",
                borderRadius:"10px",
                fontSize:"15px"
              }}
            />




            <button onClick={handleSearch}
              style={{
                padding:"14px 22px",
                border:"none",
                borderRadius:"10px",
                cursor:"pointer",
                fontWeight:"bold"
              }}
            >
              Search
            </button>






        </div>

    </div>
  )
}

export default Hero