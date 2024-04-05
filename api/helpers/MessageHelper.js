const sanitizeHtml = require("sanitize-html");

module.exports = class MessageHelper {
  static sanitizeMessage(messageContent) {
    const sanitizedMessage = sanitizeHtml(messageContent);
    if (sanitizedMessage.trim().length === 0) {
      return "🤖: This message was moderated because it contained invalid characters.";
    } else {
      return sanitizedMessage;
    }
  }
};
