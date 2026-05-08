import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Sidebar from "../components/Sidebar"
import JobCard from "../components/JobCard"
import Tracker from "../components/Tracker"
import Footer from "../components/Footer"
import Login from "../components/Login"

import { getJobs } from "../api/jobsApi"


function Home() {

  const [user, setUser] = useState(null)

  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState("")
  const [saved, setSaved] = useState([])
  const [applied, setApplied] = useState([])
  const [interview, setInterview] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    loadJobs()

    let data = localStorage.getItem("savedJobs")
    if (data) {
      setSaved(JSON.parse(data))
    }
  }, [])


  async function loadJobs() {
    setLoading(true)

    let data = await getJobs("developer")

    setJobs(data)

    setLoading(false)
  }


  async function handleSearch() {

    if (!search) {
      alert("Enter job name")
      return
    }

    setLoading(true)

    let data = await getJobs(search)

    setJobs(data)

    setLoading(false)
  }


  function saveJob(job) {

    let found = saved.find((j) => j.id === job.id)

    if (found) {
      alert("Already saved")
      return
    }

    let newSaved = [...saved, job]

    setSaved(newSaved)

    localStorage.setItem("savedJobs", JSON.stringify(newSaved))

    alert("Saved")
  }


  function applyJob(job) {
    setApplied([...applied, job])
    alert("Applied")
  }


  function interviewJob(job) {
    setInterview([...interview, job])
    alert("Interview added")
  }


  // 👉 LOGIN CHECK (IMPORTANT)
  if (!user) {
    return <Login onLogin={setUser} />
  }


  return (

    <div>

      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />


      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: "15px",
        padding: "15px"
      }}>

        <Sidebar
          saved={saved}
          applied={applied}
          interview={interview}
        />


        <div id="jobs">

          {loading ? (
            <h3>Loading...</h3>
          ) : (
            jobs.map((job, i) => (
              <JobCard
                key={i}
                job={job}
                saveJob={saveJob}
                applyJob={applyJob}
                interviewJob={interviewJob}
              />
            ))
          )}


          {!loading && jobs.length === 0 && (
            <h3>No Jobs Found</h3>
          )}


          <Tracker
            saved={saved}
            applied={applied}
            interview={interview}
            jobs={jobs}
          />

        </div>

      </div>

      <Footer />

    </div>

  )
}

export default Home