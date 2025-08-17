import { StylizedHeader } from "../headers/stylisedHeader"
import { StylizedSubheader } from "../headers/stylisedSubheader"
import { RepoStats } from "./repoStats"

export const MainCard: React.FC = () => {
  return (<div className="border-4 border-[#111111] rounded-4xl">
    <div className="min-w-full bg-gradient-to-r from-slate-200 to-neutral-400 h-fit border-4 border-[#fefefe] rounded-4xl py-8">
      <StylizedHeader text="Madison Lilith Sutton" />
      <StylizedSubheader text="21985164" />
    </div>
  </div>)
}
