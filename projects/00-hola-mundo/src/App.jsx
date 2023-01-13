import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "rhonsanchez", name: "Rhonald Sánchez", isFollowing: true },
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            isFollowing={isFollowing}
          />
        );
      })}
    </section>
  );
}
