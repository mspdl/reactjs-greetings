export default function Home() {
  const fullTime = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    hour12: false,
  }).format();

  const currentHour = new Date().getHours();
  let greetingMessage = "";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good morning 😊";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good afternoon 😀";
  } else {
    greetingMessage = "Good evening 😴";
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">{greetingMessage}</div>
    </div>
  );
}
