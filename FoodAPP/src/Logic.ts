export const Essen = {
    Name: "",
    Zutaten: [""],
    Beilagen: [""]
};


export default Essen;


export const getRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};