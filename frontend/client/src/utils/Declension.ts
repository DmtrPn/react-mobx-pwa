import proschet from 'proschet';

type ProschetFunction = (index: number | string) => string;

export class Declension {
    public static get days(): ProschetFunction {
        return proschet(['день', 'дня', 'дней']);
    }

    public static get years(): ProschetFunction {
        return proschet(['год', 'года', 'лет']);
    }

    public static get week(): ProschetFunction {
        return proschet(['неделя', 'недели', 'недель']);
    }

    public static get months(): ProschetFunction {
        return proschet(['месяц', 'месяца', 'месяцев']);
    }
}
