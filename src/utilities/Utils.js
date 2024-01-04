export function transFormatter(value) {
    localStorage.setItem("userInputDataFromLS", value);
    if (value) {
        const outputTextarea = document.getElementById("output-textarea");
        try {
            outputTextarea.value = JSON.stringify(JSON.parse(value), null, 2);
        } catch (error) {
            outputTextarea.value = "Invalid XML/JSON";
        }
    }
};


export const copyContent = () => {
    navigator.clipboard.writeText(document.getElementById("output-textarea").value);
    displayToolTip();
};

const displayToolTip = () => {
    var tooltipEle = document.querySelector(".active");
    const toggler = tooltipEle.classList.toggle("tool-tip");

    setTimeout(() => {
      tooltipEle.classList.toggle("tool-tip");
    }, 1000);
};


export const clearInput= () => {
    document.getElementById("input-textarea").value = "";
    document.getElementById("output-textarea").value = "";
    localStorage.removeItem("userInputDataFromLS");
};