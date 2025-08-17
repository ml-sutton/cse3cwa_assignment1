export interface RepoStatistics {
  commits: number
  branches: number
  pullRequests: number
}

export async function GetRepoStats(): Promise<RepoStatistics> {
  const owner: string = "ml-sutton";
  const repo: string = "cse3cwa_assignment1";
  const commitsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
  const commitsLink = commitsRes.headers.get('link')
  let commitsCount = 0
  if (commitsLink) {
    const match = commitsLink.match(/&page=(\d+)>; rel="last"/)
    if (match) commitsCount = parseInt(match[1])
  } else {
    commitsCount = (await commitsRes.json()).length
  }

  const branchesRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches?per_page=100`)
  const branchesData = await branchesRes.json()
  const branchesCount = Array.isArray(branchesData) ? branchesData.length : 0

  const pullsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=all&per_page=100`)
  const pullsData = await pullsRes.json()
  const pullsCount = Array.isArray(pullsData) ? pullsData.length : 0

  return {
    commits: commitsCount,
    branches: branchesCount,
    pullRequests: pullsCount,
  }
}
