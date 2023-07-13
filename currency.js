class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=GeDXOPUuV8IsBHjBWZ7BSLYimuku37gMttpFezZr&base_currency="
    }

    async exchange(amount, firstCurrency, secondCurrency){
        const res = await fetch(`${this.url}${firstCurrency}`);
        const data = await res.json();
        const result = amount * data.data[secondCurrency]
        return result
    }


}
