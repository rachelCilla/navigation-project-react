import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>
        <Button onClick={onClick} success rounded outline>
          <GoBell />
          click me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          see deal
        </Button>
      </div>
      <div>
        <Button outline secondary>
          hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          something
        </Button>
      </div>
    </div>
  );
}

export default App;
