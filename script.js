//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function delayFn(delay=1){
	return new Promise((resolve) => setTimeout(resolve, 1000*delay))
}

btn.addEventListener("click", async ()=> {
	const message = textInput.value;
	const delay = parseInt(delayInput.value);
	await delayFn(delay);

	textInput.value = "";
	output.innerHTML = "";
	output.innerHTML = message;
})