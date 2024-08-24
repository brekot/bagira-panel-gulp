window.styleSelect = function(x)
{
    if (!x.length) x = Array(x);

    let l = x.length;

    for (let i = 0; i < l; i++)
    {
        let select_element = x[i].querySelector("select"),
            ll = select_element.length;

        let selector = document.createElement("DIV");
            selector.classList.add("select-input__selector");
            x[i].appendChild(selector);

        let selector_span = document.createElement("SPAN");
            selector_span.classList.add("select-input__overflow");
            selector_span.innerHTML = select_element.options[select_element.selectedIndex].innerHTML;
            selector.appendChild(selector_span);

        let select_items = document.createElement("DIV");
            select_items.classList.add("select-input__items");

        for (let j = 0; j < ll; j++)
        {
            let select_item = document.createElement("A");
                select_item.classList.add("select-input__item");

            if (select_element.selectedIndex === j)
            {
                select_item.classList.add("select-input__item_active");
            }

            let select_item_span = document.createElement("SPAN");
                select_item_span.classList.add("select-input__overflow");
                select_item_span.innerHTML = select_element.options[j].innerHTML;
                select_item.appendChild(select_item_span);

            select_item.addEventListener("click", (e) => {

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

            select_items.appendChild(select_item);
        }

        x[i].appendChild(select_items);

        selector.addEventListener("click", (e) => {

            e.stopPropagation();

            closeAllSelect(e.target);

            e.target.closest(".select-input").classList.toggle("select-input_show");
        });
    }
}

styleSelect(document.querySelectorAll(".select-input"));

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