import LeftBarLayout from "../LeftBarLayout/leftBarLayout";
import NewsLettersMainCard from "./NewLetterMainCard/NewsLetterMainCard";
import NewLettersCard1 from "./NewLetterCard1/NewLetterCard1";
import NewLetterCard2 from "./NewsLettersCard2/NewLettersCard2";

function NewslettersComponent() {
  return (
    <>
      <LeftBarLayout
        mainTitle="NewsLetters"
        description="Manage your newsletter subscriptions"
        mainContent={<NewsLettersMainCard/>}
        topContent={<NewLettersCard1 />}
        bottomContent={<NewLetterCard2/>}
      />
    </>
  );
}

export default NewslettersComponent;
