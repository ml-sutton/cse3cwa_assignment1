import { StylizedHeader } from "../headers/stylisedHeader"
import { StylizedSubheader } from "../headers/stylisedSubheader"
import { RepoStats } from "./repoStats"

export const MainCard: React.FC = () => {
  return (<div className=" h-fit border-2 border-[#111111] rounded-4xl">
    <div className="border-2 rounded-4xl border-slate-200">
      <div className="min-w-full p-4 bg-gradient-to-r from-violet-200 to-pink-200 h-fit border-2 border-[#111111] rounded-4xl py-8">
        <StylizedHeader text="Madison Lilith Sutton" />
        <StylizedSubheader text="21985164" />
        <RepoStats />
      </div>
    </div>
  </div>)
}
