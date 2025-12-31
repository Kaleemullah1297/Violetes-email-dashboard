import LeftBarLayout from "../LeftBarLayout/leftBarLayout";
import CalenderCard1 from "./CalenderCard1/CalenderCard1";
import CalenderCard2 from "./CalenderCard2/CalenderCard2";
import CalenderMainCard from "./CalenderMainCard/CalenderMainCard";

function CalenderComponent() {
  return (
    <>
      <LeftBarLayout
        mainTitle="Calender"
        description="Manage your schedule and upcoming events"
        mainContent={<CalenderMainCard />}
        topContent={<CalenderCard1 />}
        bottomContent={<CalenderCard2 />}
      />
    </>
  );
}

export default CalenderComponent;
