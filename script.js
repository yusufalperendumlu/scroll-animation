const boxes = document.querySelectorAll(".box");
const boxes1 = document.querySelectorAll(".boxA");

window.addEventListener("scroll" , checkBoxes);

checkBoxes();

function checkBoxes()  {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;


        if(boxTop < triggerBottom)
        {
            box.classList.add("show");
        }

        else
        {
            box.classList.remove("show");
        }
    })

    boxes1.forEach((boxA) => {
        const boxT= boxA.getBoundingClientRect().top;


        if(boxT < triggerBottom)
        {
            boxA.classList.add("show1");
        }

        else
        {
            boxA.classList.remove("show1");
        }
    })
}