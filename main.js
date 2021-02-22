const wrapper = document.querySelector(".wrapper");
const list = ["moo", "hyo", "jun", "won", "gyun"];

const inject = () => {
	const ul = `
        <ul>
            ${list.map((name) => `<li>${name} 😎</li>`).join("")}
        </ul>
    `;

	wrapper.innerHTML = ul;
};

inject();
