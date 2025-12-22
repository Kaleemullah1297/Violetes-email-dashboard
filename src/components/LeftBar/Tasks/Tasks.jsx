import LeftBarLayout from "../LeftBarLayout/leftBarLayout";
import Card1 from "../Common/card1/card1";
import TopCardComponent from "../Common/TopCardComponent";
import BottomCardComponent from "../Common/BottomCardComponent/BottomCardComponent";
import Button from '../Common/Button/Button'

function TasksComponent() {
  return (
    <>
      <LeftBarLayout
        mainTitle="Tasks"
        description="Keep track of your To-dos and action items"
        mainContent={<Card1 cardTitle="My Tasks" rightContent={<Button text="New Task"/>}/>}
        topContent={<TopCardComponent cardTitle="Progress" />}
        bottomContent={<BottomCardComponent cardTitle="Quick Stats"/>}
      />
    </>
  );
}

export default TasksComponent;
