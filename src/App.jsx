import "./App.css";
import ProfileCard from "./components/ProfileCard";
import profiles from "./data/profile";
function App() {
  return (
    <div className="container">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          profession={profile.profession}
          age={profile.age}
          image={profile.image}
          isAvailable={profile.isAvailable}
        />
      ))}
    </div>
  );
}
export default App;