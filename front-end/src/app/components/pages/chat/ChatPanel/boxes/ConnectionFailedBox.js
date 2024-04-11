import ContentCard from "@/app/components/commons/ContentCard";
import FindNewPartnerButton from "../buttons/FindNewBarterButton";

export default function ConnectionFailedBox() {
  return (
    <ContentCard>
      <p>
        🔌 Server is unreachable. Click the button below to try again or{" "}
        <a href="/contact-us">contact us.</a>
      </p>
      <FindNewPartnerButton />
    </ContentCard>
  );
}
