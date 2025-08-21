import TitleCardIcon from "./titlecardIcon"

export const TitleCard: React.FC = () => {
  return (
    <div className="lg:mr-auto flex ">
      <div className="pt-2">
        <TitleCardIcon />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold capitalize">La Tabs</h1>
        <h2 className="text-xl italic">21985164</h2>
      </div>
    </div>
  )
}
