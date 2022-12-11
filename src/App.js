
import "./App.css";
import Profile from "./Profile/Profile";
import Picture from "./images/MyPicture.jpeg";

const handleName = (fullname) => {
  alert(fullname);
};

function App() {
  return (
    <div className="App">
      <Profile
        fullname={"Macaulay Temitope"}
        bio={"I am a ReactJs Developer, I am getting better at this"}
        profession={"ReactJs Developer"}
        handleName={handleName}
      >
        <img
          style={{ height: "100px", width: "100px"  ,objectFit: "cover", borderRadius: "100%" }}
          src={Picture}
          alt="profile"
        />
      </Profile>
    </div>
  );
}

export default App;