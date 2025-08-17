import { useEffect, useState } from "react";
import { GetRepoStats, RepoStatistics } from "../../../utils/about/GetRepoStats"

export const RepoStats: React.FC = () => {
  const [hasRendered, setHasRendered] = useState<boolean>(false);
  const [repoStats, setRepoStats] = useState<RepoStatistics>({ commits: 0, branches: 0, pullRequests: 0 })
  useEffect(() => {

  }, [hasRendered])
  const stats = GetRepoStats();
  stats.then(value => console.log(value))

  return (
    <div>


    </div>
  )
}
