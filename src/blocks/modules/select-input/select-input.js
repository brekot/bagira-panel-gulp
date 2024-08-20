let x = document.querySelectorAll(".select-input"),
    l = x.length;

for (let i = 0; i < l; i++)
{
    let selectElement = x[i].getElementsByTagName("select")[0],
        ll = selectElement.length;

    let a = document.createElement("DIV");

    a.classList.add("select-input__selector");
    a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    x[i].appendChild(a);

    let b = document.createElement("DIV");

    b.classList.add("select-input__items");

    for (let j = 0; j < ll; j++)
    {
        let c = document.createElement("A");

        c.classList.add("select-input__item");

        if (selectElement.selectedIndex === j)
        {
            c.classList.add("select-input__item_active");
        }

        c.innerHTML = selectElement.options[j].innerHTML;

        c.addEventListener("click", (e) => {

            let elem = e.target,
                block = elem.closest(".select-input"),
                select = block.querySelector(".select-input__select"),
                sl = select.length;

            for (let i = 0; i < sl; i++)
            {
                if (select.options[i].innerHTML == elem.innerHTML)
                {
                    select.selectedIndex = i;

                    block.querySelector(".select-input__selector").innerHTML = elem.innerHTML;

                    block.querySelector(".select-input__items").querySelector(".select-input__item_active").classList.remove("select-input__item_active");

                    elem.classList.add("select-input__item_active");

                    break;
                }
            }

            const event = new Event('change');

            select.dispatchEvent(event);
        });

        b.appendChild(c);
    }

    x[i].appendChild(b);

    a.addEventListener("click", (e) => {

        e.stopPropagation();

        closeAllSelect(e.target);

        e.target.closest(".select-input").classList.toggle("select-input_show");
    });
}

function closeAllSelect(elem)
{
    let y = document.querySelectorAll(".select-input__selector"),
        yl = y.length,
        arrNo = [];

    for (let i = 0; i < yl; i++)
    {
        if (elem == y[i])
        {
            arrNo.push(i)
        }
        else
        {
            y[i].closest(".select-input").classList.remove("select-input_show");
        }
    }
}

document.addEventListener("click", closeAllSelect);