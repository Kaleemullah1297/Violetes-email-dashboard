import InboxComponent from "../../../components/Inbox/Inbox";

function SentItems() {
  const users = [
    {
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      priority: "High",
      displayName: "AL",
      date: "3:45 PM",
      type: "work",
      name: "Alice Lee",
      subject: "Project Kickoff Meeting",
      description:
        "Hi team, the project kickoff meeting is scheduled for tomorrow. Please review the agenda before attending.",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/45.jpg",
      priority: "Medium",
      displayName: "BT",
      date: "Yesterday",
      type: "personal",
      name: "Brian Thompson",
      subject: "Dinner Plans",
      description:
        "Are you available for dinner this weekend? Let me know which day works best.",
    },
    {
      imgSrc: null,
      priority: "Low",
      displayName: "CL",
      date: "Mon",
      type: "system",
      name: "System Admin",
      subject: "Maintenance Notification",
      description:
        "The system will be under maintenance on Sunday from 12 AM to 4 AM. Please save your work.",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/78.jpg",
      priority: null,
      displayName: "DM",
      date: "10:15 AM",
      type: "friendly",
      name: "David Miller",
      subject: "Weekend Hike",
      description:
        "Hey! Are you interested in joining a hike this weekend? We’ll meet at the usual spot.",
    },
    {
      imgSrc: null,
      priority: "High",
      displayName: null,
      date: "Dec 24",
      type: "alert",
      name: "Security Team",
      subject: "Account Login Alert",
      description:
        "A new login to your account was detected. If this wasn't you, please reset your password immediately.",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/12.jpg",
      priority: "Medium",
      displayName: "EV",
      date: "Dec 23",
      type: "notification",
      name: "Event Manager",
      subject: "Event Registration Confirmation",
      description:
        "Your registration for the upcoming event has been confirmed. See you there!",
    },
    {
      imgSrc: null,
      priority: "Low",
      displayName: "FG",
      date: "Sun",
      type: null,
      name: "Fiona Green",
      subject: "Photography Tips",
      description:
        "Here are some photography tips I found useful last weekend. Hope you enjoy them!",
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

export default SentItems;
