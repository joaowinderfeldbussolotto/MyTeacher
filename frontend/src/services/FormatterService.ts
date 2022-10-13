export const FormatterService = {
    money(value: number): string {
        return value.toLocaleString('pt-BR', 
        { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
        )},
    limitText (text:string, limit:number): string {
        return text.length < limit? text : text.slice(0,limit) + '...';
    }
}
