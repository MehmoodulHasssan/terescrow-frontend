import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AgentChat from "@/components/ChatAgent/AgentChat";
import ChatPfpNav from "@/components/ChatPfpNav";
import { images } from "@/constants";

const ChatWithAgent = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View>
        <ChatPfpNav name="Obi Junior" status="Always Online" image={images.maskGroup} />
      </View>
      <View style={{ flex:1 }}>
        <AgentChat />
      </View>
    </SafeAreaView>
  );
};

export default ChatWithAgent;
