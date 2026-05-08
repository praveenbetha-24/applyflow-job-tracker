const APP_ID = import.meta.env.VITE_ADZUNA_APP_ID;

const APP_KEY = import.meta.env.VITE_ADZUNA_APP_KEY;

export async function getJobs(search = "developer") {

  const url =
    `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=10&what=${search}`;

  const response = await fetch(url);

  const data = await response.json();

  return data.results;
}