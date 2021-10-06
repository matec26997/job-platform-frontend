//Import Laravel Echo
import Echo from "laravel-echo";
//Import pusher
import Pusher from "pusher-js";

function InitializeWS() {
    window.Pusher = Pusher;
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "job_platform_2021",
      wsHost: window.location.hostname,
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });
  }

  export default InitializeWS;