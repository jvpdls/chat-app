import ContentCard from "@/app/components/commons/ContentCard";
import CTA from "./CTA";

export default function HomeContent() {
  return (
    <ContentCard>
      <p>
        Join millions of people worldwide, engaging in meaningful conversations
        and making new friends. Whether you're looking for advice, company, or
        just someone to talk to, our platform is designed to connect you with
        someone new, every time.
      </p>
      <p>
        Experience the freedom of anonymous chats, where your identity remains a
        secret. Our strict moderation ensures a safe and respectful environment
        for all users.
      </p>
      <h2 className="title is-4">Why Chat App?</h2>
      <p>
        Our platform is designed to connect you with someone new, every time.
        Whether you're looking for advice, company, or just someone to talk to,
        we're here to help. Our strict moderation ensures a safe and respectful
        environment for all users.
      </p>
      <ul>
        <li>
          Connect with new people: Millions of users worldwide are ready to
          chat.
        </li>
        <li>
          Meaningful conversations: Find advice, companionship or just someone
          to talk to.
        </li>
        <li>Always someone new: Chat with a different person every time.</li>
        <li>Stay anonymous: Your identity is completely hidden.</li>
        <li>
          Safe and respectful: Strict moderation keeps the environment positive.
        </li>
        <li>No registration: Click a button and start chatting instantly.</li>
      </ul>
      <p>
        We believe in the importance of maintaining anonymity and providing a
        safe space for users. Our platform is committed to fighting against
        misuse and ensuring that our users can connect with others without fear.
        We encourage responsible use and appreciate your understanding and
        cooperation in keeping our community safe and respectful.
      </p>
      <CTA />
    </ContentCard>
  );
}
