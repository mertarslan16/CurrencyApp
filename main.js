const amountInput = document.querySelector("#amount")
const firstCurrencyValue = document.querySelector("#firstCurrencyOption")
const secondCurrencyValue = document.querySelector("#secondCurrencyOption")
const result =document.querySelector("#result")

runElementListeners()
const currency  = new Currency()

function runElementListeners() {
    amountInput.addEventListener("input", exchange);
}

function  exchange() {
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstCurrencyValue.options[firstCurrencyValue.selectedIndex].textContent;
    const secondOptionValue = secondCurrencyValue.options[secondCurrencyValue.selectedIndex].textContent;
    currency.exchange(amount,firstOptionValue,secondOptionValue)
        .then((res)=>{
            result.value=res.toFixed(3)
        })
}