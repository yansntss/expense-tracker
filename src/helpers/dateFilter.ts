import { Item } from "../types/Items";

//Função para pegar o mês atual
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

// filtrar lista pelo mes
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split("-")

    for (let i in list) {
        if (list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() + 1) === parseInt(month)) {
            newList.push(list[i])
        }
    }
    return newList;
}

export const formateDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`
