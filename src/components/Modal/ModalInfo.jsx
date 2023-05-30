import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ModalForm = () => {
  const [, setFile] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const web = await fetch("https://api.github.com/users/joaovitor-santos");
      const blob = await web.blob();
      const file = new File([blob], "icon", { type: "image/png" });
      setFile(file);
    }
    fetchData();
  }, []);

  const icon = {
    title: "Share, thank you!",
    text: "Share this website, thank you!",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  };

  function shareAcross(objeto) {
    if (navigator.share) {
      navigator
        .share(objeto)
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("No suporte");
    }
  }

  return (
    <div>
      <div>
        <Button variant="primary" onClick={() => shareAcross(icon)}>
          <i className="bx bx-share-alt text-xl text-slate-950 md:text-2xl "></i>
        </Button>
      </div>
    </div>
  );
};

export default ModalForm;
