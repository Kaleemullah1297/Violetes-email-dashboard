import LeftBarLayout from "../LeftBarLayout/leftBarLayout";
import PeopleMainCard from "./PeopleMainCard/PeopleMainCard";
import PeopleContactStatsCard from "./PeopleSideCard1/PeopleSideCards1";
import PeopleRecentActivityCard from "./PeopleSideCard2/PeopleSideCard2";

function People() {
  return (
    <>
      <LeftBarLayout
        mainTitle="People"
        description="Manage your contacts and connections"
        mainContent={<PeopleMainCard />}
        topContent={<PeopleContactStatsCard />}
        bottomContent={<PeopleRecentActivityCard />}
      />
    </>
  );
}

export default People;
