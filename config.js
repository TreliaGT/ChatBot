import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import BotAvatar from "./botcustom/ChatbotAvatar";
import LinkList from "./components/LinkList/LinkList";

const config = { 
    botName: 'Webwizards Bot',
    lang: "no",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#872130",
      },
      chatButton: {
        backgroundColor: "#872130",
      },
    },
    customComponents: {
      // Replaces the default header
     header: () => <div style={{ backgroundColor: '#3A0E14', fontSize: '15px', borderRadius: "3px" }}>Talking to Wanda</div>,
     // Replaces the default bot avatar
     botAvatar: (props) => <BotAvatar {...props} />,
     // Replaces the default bot chat message container
    // botChatMessage: (props) => <CustomChatMessage {...props} />,
     // Replaces the default user icon
     //userAvatar: (props) => <MyUserAvatar {...props} />,
     // Replaces the default user chat message
     //userChatMessage: (props) => <MyUserChatMessage {...props} />
   },
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help.", {
          widget: "learningOptions",
        }),
      ],
  widgets: [
    {
        widgetName: "learningOptions",
       widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Layouts",
            url:
              "/cheatsheet/layouts/",
            id: 1,
          },
          {
            text: "Coding",
            url:
              "/cheatsheet/code",
            id: 2,
          },
          {
            text: "Styles",
            url: "/cheatsheet/font",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
