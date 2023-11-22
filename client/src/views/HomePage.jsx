import { useState } from "react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import JoinGame from "../components/JoinGame";
import { Chat } from "stream-chat-react";

function HomePage() {
  const api_key = "47g7bms4xtmq";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };
  if (token) {
    client
      .connectUser(
        {
          //connect to their spesific account
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setIsAuth(true);
        // console.log(user);
      });
  }
  return (
    <>
      <div className="App">
        {isAuth ? (
          <Chat client={client}>
            <JoinGame />
            <button onClick={logOut}>Log Out</button>
          </Chat>
        ) : (
          <>
            <SignUp setIsAuth={setIsAuth} />
            <Login setIsAuth={setIsAuth} />
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;