import ContentCard from "@/app/components/commons/ContentCard";
import FindNewPartnerButton from "../buttons/FindNewBarterButton";

export default function PartnerDisconnectedBox() {
  return (
    <ContentCard>
      <p>📴 You have disconnected.</p>
      <FindNewPartnerButton />
    </ContentCard>
  );
}
