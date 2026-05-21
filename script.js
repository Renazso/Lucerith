const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("mousemove", (e) => {

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.backgroundPosition = `${x}px ${y}px`;
  });

});