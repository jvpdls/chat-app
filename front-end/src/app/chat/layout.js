import metaDataUtils from "../utils/metaDataUtils";
import ChatPage from "./page";

export const metadata = {
  title: metaDataUtils.setPageTitle("Chat Panel"),
  description: "Talk to strangers from all over the world.",
  alternates: {
    canonical: metaDataUtils.setPageCanonical("chat"),
  },
};

export default ChatPage;
