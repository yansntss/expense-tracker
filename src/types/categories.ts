// para tipar os dados do categories
export type Category = {
    [tag: string] : {
        title: string;
        color: string;
        expense: boolean;
    }
}