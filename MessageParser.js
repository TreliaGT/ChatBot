class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("coding") || 
          lowerCaseMessage.includes("javascript") || 
          lowerCaseMessage.includes("php") ||
          lowerCaseMessage.includes("layouts")) {
        this.actionProvider.handleJavascriptList();
      }
    }
  }
  
  export default MessageParser;