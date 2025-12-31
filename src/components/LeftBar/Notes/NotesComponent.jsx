import LeftBarLayout from "../LeftBarLayout/leftBarLayout";
import NotesCard1 from "./NotesCard1/NotesCard1";
import NotesCard2 from "./NotesCard2/NotesCard2";
import NoteMainCard from "./NotesMainCard/NotesMainCard"


function NotesComponent() {
  return (
    <>
      <LeftBarLayout
        mainTitle="Notes"
        description="Capture ideas and important information"
        mainContent={<NoteMainCard/>}
        topContent={<NotesCard1 />}
        bottomContent={<NotesCard2 />}
      />
    </>
  );
}

export default NotesComponent;
