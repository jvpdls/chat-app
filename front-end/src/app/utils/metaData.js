class MetaDataUtils {
  setPageTitle(title) {
    return `${title} | Chat App`;
  }
  setPageCanonical(slug) {
    const baseUrl = process.env.CHAT_BASE_URL;
    return `${baseUrl}/${slug}`;
  }
}

export default new MetaDataUtils();
