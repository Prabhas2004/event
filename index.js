<script>
    document.addEventListener("DOMContentLoaded", () => {
      const countdownElement = document.getElementById("countdown-timer");
      if (!countdownElement) {
        console.error("Countdown element NOT found!");
        return;
      }
      
      const eventDate = new Date("March 22, 2025 00:00:00").getTime();

      const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
          countdownElement.innerHTML = "<span style='color:#ffdd57;'>Event Started!</span>";
          return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


        countdownElement.innerHTML = `<span style="font-size:2rem; font-weight:bold;">${days} Days ${hours}h ${minutes}m ${seconds}s</span> Days Remaining`;
      };
      
      setInterval(updateCountdown, 1000);
      updateCountdown();
    });
  </script>