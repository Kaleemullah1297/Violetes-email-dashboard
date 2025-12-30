import InboxComponent from "../../../components/Inbox/Inbox";

function Drafts() {
  const users = [
    {
      imgSrc:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/3/38/Link2.png",
      priority: "High",
      displayName: "SC",
      date: "2:30 PM",
      type: "friendly",
      name: "Sarah Chen",
      subject: "Q4 Marketing Campaign Review",
      description:
        "Hi team, I've completed the analysis of our Q4 marketing performance. The results are quite promising...",
    },
    {
      priority: "Medium",
      displayName: "JD",
      date: "Yesterday",
      type: "work",
      name: "John Doe",
      subject: "Updated API Documentation",
      description:
        "I've pushed the latest API documentation changes. Please review when you have time.",
    },
    {
      priority: "Low",
      displayName: "AM",
      date: "Mon",
      type: "system",
      name: "Automated Message",
      subject: "Password Expiry Notice",
      description: null,
    },
    {
      priority: null,
      displayName: "LR",
      date: "09:15 AM",
      type: "personal",
      name: "Liam Rodriguez",
      subject: "Lunch Tomorrow?",
      description:
        "Are you free for lunch tomorrow? Let me know what works best for you.",
    },
    {
      priority: "High",
      displayName: null,
      date: "Dec 22",
      type: "alert",
      name: "Security Team",
      subject: "Unusual Login Activity Detected",
      description:
        "We detected a login from a new device. If this wasn't you, please secure your account immediately.",
    },
    {
      priority: "Medium",
      displayName: "KS",
      date: null,
      type: "notification",
      name: "Kubernetes Service",
      subject: "Deployment Successful",
      description:
        "Your latest deployment completed successfully with no errors.",
    },
    {
      priority: "Low",
      displayName: "MB",
      date: "Sun",
      type: null,
      name: "Maria Brown",
      subject: "Weekend Photos",
      description:
        "Sharing a few photos from the weekend trip. It was a great experience!",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span>
          <button className="btn" type="button">
            Essential
          </button>
          <button className="btn" type="button">
            Community
          </button>
          <button className="btn" type="button">
            Highlights
          </button>
          <button className="btn" type="button">
            Other Mail
          </button>
        </span>
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </div>

      <small className="ms-3">Pulse Inbox (AI Priority)</small>
      <hr />
      {users?.length > 0 ? (
        users.map((file, index) => (
          <InboxComponent
            key={index}
            name={file.name}
            subject={file.subject}
            description={file.description}
            type={file.type}
            date={file.date}
            displayName={file.displayName}
            priority={file.priority}
            imgSrc={file.imgSrc}
          />
        ))
      ) : (
        <p className="text-muted ms-3">No messages found</p>
      )}
    </>
  );
}

export default Drafts;